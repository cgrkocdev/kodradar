import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { GET } from '../api/live-profile.js';

const root = new URL('../', import.meta.url);
const [html, css, js] = await Promise.all([
  fs.readFile(new URL('index.html', root), 'utf8'),
  fs.readFile(new URL('styles.css', root), 'utf8'),
  fs.readFile(new URL('app.js', root), 'utf8')
]);

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, 'HTML kimlikleri benzersiz olmalı');
for (const required of ['dashboard','analyzer','generator','library','planner','ideaForm','refreshLive','profileScore']) {
  assert(ids.includes(required), `Eksik bölüm: ${required}`);
}
assert(css.length > 10000, 'Stil dosyası beklenenden küçük');
assert(!html.includes('Tahmini izlenme'), 'Sallama izlenme tahmini geri gelmemeli');
assert(js.includes('viralSignals'), 'Viral sinyal analizi bulunamadı');
assert(js.includes('refreshLiveData'), 'Canlı veri yenileme bulunamadı');
assert(js.includes('setInterval'), 'Otomatik yenileme bulunamadı');

const response = await GET(new Request('http://localhost/api/live-profile?username=cagrikod'));
assert.equal(response.status, 200, 'Canlı profil API yanıtı başarısız');
const payload = await response.json();
assert(Number.isInteger(payload.followers) && payload.followers > 0, 'Takipçi sayısı alınamadı');
assert(payload.posts.length >= 19, 'Tüm gönderiler alınamadı');
assert(Math.max(...payload.posts.map(post => post.views)) >= 800000, 'Viral gönderi verisi eksik');

console.log(JSON.stringify({
  status: 'passed', sections: 5, followers: payload.followers,
  posts: payload.posts.length, max_views: Math.max(...payload.posts.map(post => post.views))
}, null, 2));
