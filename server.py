from __future__ import annotations

import html
import http.cookiejar
import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

HOST = "127.0.0.1"
PORT = 4173
USER_AGENT = "Mozilla/5.0"


def opener():
    jar = http.cookiejar.CookieJar()
    return urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))


def fetch(client, url, headers=None):
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, **(headers or {})})
    with client.open(request, timeout=25) as response:
        return response.read().decode("utf-8", "replace")


def follower_count(profile_html):
    text = ""
    for tag in re.findall(r'<meta\b[^>]*>', profile_html, re.I):
        if re.search(r'(?:name|property)="(?:description|og:description)"', tag, re.I):
            content = re.search(r'content="([^"]*)"', tag, re.I)
            if content and re.search(r'Followers|Takipçi', html.unescape(content.group(1)), re.I):
                text = html.unescape(content.group(1))
                break
    count = re.search(r'([\d.,]+)\s+(?:Followers|Takipçi)', text, re.I)
    if not count:
        return None
    raw = count.group(1).replace(".", "").replace(",", "")
    return int(raw) if raw.isdigit() else None


def initial_posts(page):
    block = re.search(r'\\"initialPosts\\":\[(.*?)\],\\"initialCursor\\"', page, re.S)
    if not block:
        return []
    escaped = block.group(1)
    try:
        decoded = json.loads('"' + escaped.replace('"', '\\"').replace('\\\\"', '\\"') + '"')
        raw_posts = json.loads('[' + decoded + ']')
    except (ValueError, json.JSONDecodeError):
        decoded = escaped.replace('\\"', '"').replace('\\n', '\\n').replace('\\/', '/')
        raw_posts = json.loads('[' + decoded + ']')
    result = []
    for post in raw_posts:
        details = post.get("details") or {}
        caption = post.get("caption") or "Başlıksız içerik"
        result.append({
            "code": post.get("code"), "title": caption.splitlines()[0][:90],
            "views": details.get("play_count") or 0, "likes": post.get("like_count") or 0,
            "comments": post.get("comment_count") or 0, "duration": round(details.get("duration_s") or 0),
            "timestamp": post.get("taken_at") or 0, "type": "Canlı içerik"
        })
    return result


def older_posts(client, page, username):
    token = re.search(r'name="x-peekghost-token" content="([^"]+)"', page)
    cursor = re.search(r'\\"initialCursor\\":\\"([^\\"]+)\\"', page)
    user_id = re.search(r'\\"userId\\":\\"(\d+)\\"', page)
    if not (token and cursor and user_id):
        return []
    query = urllib.parse.urlencode({"user_id": user_id.group(1), "username": username, "cursor": cursor.group(1)})
    raw = fetch(client, "https://peekghost.com/api/results/posts?" + query, {
        "Accept": "application/json", "Referer": f"https://peekghost.com/u/{username}/posts",
        "x-peekghost-token": token.group(1)
    })
    data = json.loads(raw)
    output = []
    for post in data.get("data", {}).get("posts", []):
        details = post.get("details") or {}
        output.append({
            "code": post.get("code"), "title": (post.get("caption") or "Başlıksız içerik").splitlines()[0][:90],
            "views": details.get("play_count") or 0, "likes": post.get("like_count") or 0,
            "comments": post.get("comment_count") or 0, "duration": round(details.get("duration_s") or 0),
            "timestamp": post.get("taken_at") or 0, "type": "Canlı içerik"
        })
    return output


def live_profile(username):
    client = opener()
    ig_html = fetch(client, f"https://www.instagram.com/{urllib.parse.quote(username)}/")
    followers = follower_count(ig_html)
    posts_page = fetch(client, f"https://peekghost.com/u/{urllib.parse.quote(username)}/posts")
    posts = initial_posts(posts_page)
    try:
        posts.extend(older_posts(client, posts_page, username))
    except Exception:
        pass
    unique = {post["code"]: post for post in posts if post.get("code")}
    ordered = sorted(unique.values(), key=lambda post: post.get("timestamp", 0), reverse=True)
    return {"username": username, "followers": followers, "posts": ordered, "fetched_at": int(time.time())}


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/live-profile":
            username = urllib.parse.parse_qs(parsed.query).get("username", ["cagrikod"])[0]
            if not re.fullmatch(r"[A-Za-z0-9._]{1,30}", username):
                return self.json_response({"error": "Geçersiz kullanıcı adı"}, 400)
            try:
                return self.json_response(live_profile(username))
            except (urllib.error.URLError, ValueError, json.JSONDecodeError) as error:
                return self.json_response({"error": str(error)}, 502)
        return super().do_GET()

    def json_response(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    print(f"KodRadar çalışıyor: http://{HOST}:{PORT}")
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()
