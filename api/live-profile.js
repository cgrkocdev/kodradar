const USER_AGENT = 'Mozilla/5.0';

async function fetchText(url, headers = {}) {
  const response = await fetch(url, { headers: { 'user-agent': USER_AGENT, ...headers }, signal: AbortSignal.timeout(25000) });
  if (!response.ok) throw new Error(`Upstream ${response.status}`);
  return { text: await response.text(), headers: response.headers };
}

function parseFollowers(source) {
  const tags = source.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    if (!/(?:name|property)="(?:description|og:description)"/i.test(tag)) continue;
    const content = tag.match(/content="([^"]*)"/i)?.[1]
      ?.replace(/&#x([0-9a-f]+);/gi, (_, value) => String.fromCodePoint(parseInt(value, 16)))
      .replace(/&quot;/g, '"');
    const count = content?.match(/([\d.,]+)\s+(?:Followers|Takipçi)/i)?.[1];
    if (count) return Number(count.replace(/[.,]/g, ''));
  }
  return null;
}

function parseProfileFollowers(source) {
  const exact = source.match(/"counts":\{"posts":\d+,"followers":(\d+),"following":\d+\}/);
  if (exact) return Number(exact[1]);
  const visible = source.match(/title="([\d.,]+)"[^>]*>[\d.,]+<\/strong>\s*[^<]*Followers/i);
  return visible ? Number(visible[1].replace(/[.,]/g, '')) : null;
}

function normalizePost(post) {
  const details = post.details || {};
  const caption = post.caption || 'Başlıksız içerik';
  return {
    code: post.code,
    title: caption.split(/\r?\n/)[0].slice(0, 90),
    views: details.play_count || 0,
    likes: post.like_count || 0,
    comments: post.comment_count || 0,
    duration: Math.round(details.duration_s || 0),
    timestamp: post.taken_at || 0,
    type: 'Canlı içerik'
  };
}

function parseInitialPosts(source) {
  const match = source.match(/\\"initialPosts\\":\[(.*?)\],\\"initialCursor\\"/s);
  if (!match) return [];
  try {
    const decoded = match[1].replace(/\\"/g, '"').replace(/\\n/g, '\\n').replace(/\\\//g, '/');
    return JSON.parse(`[${decoded}]`).map(normalizePost);
  } catch {
    return [];
  }
}

async function fetchOlderPosts(source, username) {
  const token = source.match(/name="x-peekghost-token" content="([^"]+)"/)?.[1];
  const cursor = source.match(/\\"initialCursor\\":\\"([^\\"]+)\\"/)?.[1];
  const userId = source.match(/\\"userId\\":\\"(\d+)\\"/)?.[1];
  if (!token || !cursor || !userId) return [];
  const query = new URLSearchParams({ user_id: userId, username, cursor });
  const { text } = await fetchText(`https://peekghost.com/api/results/posts?${query}`, {
    accept: 'application/json', referer: `https://peekghost.com/u/${username}/posts`, 'x-peekghost-token': token
  });
  return (JSON.parse(text).data?.posts || []).map(normalizePost);
}

export async function GET(request) {
  const username = new URL(request.url).searchParams.get('username') || 'cagrikod';
  if (!/^[A-Za-z0-9._]{1,30}$/.test(username)) return Response.json({ error: 'Geçersiz kullanıcı adı' }, { status: 400 });
  try {
    const [{ text: instagram }, { text: profile }, { text: page }] = await Promise.all([
      fetchText(`https://www.instagram.com/${encodeURIComponent(username)}/`),
      fetchText(`https://peekghost.com/u/${encodeURIComponent(username)}`),
      fetchText(`https://peekghost.com/u/${encodeURIComponent(username)}/posts`)
    ]);
    const initial = parseInitialPosts(page);
    let older = [];
    try { older = await fetchOlderPosts(page, username); } catch (error) { console.error('older_posts_failed', error.message); }
    const unique = new Map([...initial, ...older].filter(post => post.code).map(post => [post.code, post]));
    const posts = [...unique.values()].sort((a, b) => b.timestamp - a.timestamp);
    return Response.json({ username, followers: parseFollowers(instagram) ?? parseProfileFollowers(profile), posts, fetched_at: Math.floor(Date.now() / 1000) }, {
      headers: { 'cache-control': 'public, s-maxage=300, stale-while-revalidate=600' }
    });
  } catch (error) {
    console.error('live_profile_failed', error);
    return Response.json({ error: 'Canlı profil verisi alınamadı' }, { status: 502 });
  }
}

export const _test = { parseFollowers, parseProfileFollowers, parseInitialPosts, normalizePost };
