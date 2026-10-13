const posts = [
  {title:'2040 yılında yazılımcılar', views:850534, likes:14304, comments:84, duration:24, type:'Hikâyeli skeç', lesson:'Absürt gelecek senaryosu, MacBook ve ilk karede merak.'},
  {title:'Fukara ama prensipli yazılımcı', views:685878, likes:11247, comments:185, duration:27, type:'Hikâyeli skeç', lesson:'Güçlü karakter, görünür nesne ve fiziksel komedi.'},
  {title:'Yazılımcıların her şeyi yapabildiğini sanmak', views:251620, likes:5042, comments:26, duration:27, type:'Hikâyeli skeç', lesson:'Yaygın toplumsal yanlış anlama, güçlü olay örgüsü.'},
  {title:'Orta Çağ’da yazılım', views:5602, likes:59, comments:0, duration:15, type:'Skeç', lesson:'Başlık iyi; aksiyon ve final yeterince büyümüyor.'},
  {title:'Eşref Yazılımcıoğlu', views:4405, likes:68, comments:3, duration:28, type:'Skeç', lesson:'Referans dar, yazılım problemi yeterince evrensel değil.'},
  {title:'Hızlı ol, frontçu olma', views:57985, likes:1237, comments:25, duration:32, type:'Skeç', lesson:'Net slogan ve tekrar edilebilir replik paylaşımı artırıyor.'},
  {title:'Koyun can, kasap dinozor derdinde', views:2183, likes:17, comments:0, duration:53, type:'Anlatı', lesson:'Uzun giriş, belirsiz vaat ve zayıf ilk kare.'},
  {title:'İlk kod nasıl yazıldı?', views:2846, likes:36, comments:2, duration:53, type:'Öğretici', lesson:'Konu meraklı; boş araziyle başlayan kanca izleyiciyi kaybediyor.'},
  {title:'Çözemediğim hataların kafamdaki muamelesi', views:56845, likes:1590, comments:9, duration:27, type:'Hikâyeli skeç', lesson:'En yüksek beğeni oranı; acı, yükselen aksiyon ve final var.'},
  {title:'Sadece AI ile mobil uygulama yapmak', views:7192, likes:65, comments:14, duration:113, type:'Öğretici', lesson:'Konu yorum üretiyor; tek video yerine seri olmalı.'},
  {title:'Senior’un junior’a muamelesi', views:82394, likes:482, comments:2, duration:8, type:'Kısa meme', lesson:'İlk karede hareket ve net kimlik çatışması.'},
  {title:'Çalışıyormuş gibi yapmak', views:6506, likes:34, comments:0, duration:10, type:'Kısa meme', lesson:'Genel mizah; yazılımcı kitlesine özgülük düşük.'},
  {title:'WinRAR’ın garibanlığı', views:15843, likes:88, comments:2, duration:7, type:'Kısa meme', lesson:'Kısa ve tanıdık; hikâye derinliği sınırlı.'},
  {title:'Ödemeyi önden/sonradan alan yazılımcı', views:13511, likes:105, comments:2, duration:5, type:'Kısa meme', lesson:'Freelance acısı net, paylaşılabilir karşılaştırma.'},
  {title:'Günlerdir uyutmayan hatayla vedalaşmak', views:2569, likes:33, comments:0, duration:6, type:'Kısa meme', lesson:'Fikir ilgili ama görsel aksiyon zayıf.'},
  {title:'Z kuşağı mahzene düşerse', views:6022, likes:38, comments:2, duration:14, type:'Genel mizah', lesson:'Yazılım hedef kitlesiyle bağ zayıf.'},
  {title:'Google Developers Group etkinliği', views:2664, likes:22, comments:1, duration:48, type:'Vlog', lesson:'İzleyici faydası yerine kişisel etkinlik kaydı.'},
  {title:'Yazılıma başlamadan önceki hayat kalitem', views:3178, likes:16, comments:0, duration:15, type:'Genel mizah', lesson:'Çok sayıda ilgisiz sahne; net final eksik.'},
  {title:'Yapay zekâ yazılımı bitirince benim meslek', views:10513, likes:67, comments:0, duration:33, type:'Skeç', lesson:'Güncel korku ve görsel hikâye; final güçlendirilebilir.'}
];

const ideaBank = {
  junior: {
    reach: [
      ['2040 yılında junior yazılımcılar','Junior iş görüşmesine kod yerine AI prompt dosyasıyla gelir.','İlk kare: “2040’ta junior mülakatı” yazısı ve masaya bırakılan dev bir prompt klasörü.',['Mülakatçı klasörü açar','Her sayfada “ChatGPT’ye sor” yazar','Finalde AI mülakatçıyı da işe alır']],
      ['Production’a kod atan junior','Junior kırmızı bir düğmeye basar ve ofiste alarm çalar.','İlk saniyede kırmızı alarm ve panikle kaçan junior.',['Butona yakın plan','Senior olay yerine gelir','Junior laptopuyla taksiye atlar']],
      ['Junior’a “çok basit” diyen senior','Senior küçük bir kutu verir; kutudan kilometrelerce kablo çıkar.','“Sadece ufak bir task” yazısı ve minik kutu.',['Junior kutuyu açar','Task büyümeye devam eder','Final: sprint panosu devrilir']]
    ],
    authority: [
      ['Junior GitHub otopsisi','Gerçek bir anonim GitHub profilini üç kriterle inceliyorsun.','“Bu GitHub neden mülakat getirmiyor?”',['İlk 3 saniyede sonucu söyle','Projeleri ekranda işaretle','Düzeltilmiş profil örneğini göster']],
      ['6 kurs, sıfır proje','Kurs tüketme döngüsünü bir masa üzerinde fiziksel olarak göster.','“Sorunun bilgi eksikliği değil.”',['Kurs sertifikalarını yığ','Tek proje dosyasını ortaya koy','30 günlük çözümü göster']],
      ['İlk işe götüren proje','Kopya hava durumu uygulaması ile gerçek problem çözen projeyi karşılaştır.','“İkisi de React; sadece biri iş getirir.”',['Yan yana iki ekran','Farkları üç maddede göster','Proje briefi ver']]
    ],
    lead: [
      ['Junior yol haritası teşhisi','Bir takipçinin dağınık öğrenme listesini 6 haftalık plana çevir.','“Bu listeyle 1 yıl daha kaybedersin.”',['Mevcut listeyi göster','Üç şeyi sil','Yeni haftalık planı aç']],
      ['Mentörlükte ilk hafta','Bir öğrencinin ilk haftasında neyi değiştirdiğini somut belgelerle göster.','“İlk hafta kod yazdırmadım.”',['Seviye analizini göster','Hedef seçimini anlat','İlk görevle bitir']],
      ['Kimler mentörlük almamalı?','Programın uygun olmadığı üç kişiyi açıkça anlat.','“Herkesi programa kabul etmiyorum.”',['Beklentileri filtrele','Uygun profili tarif et','YOL anahtar kelimesiyle bitir']]
    ]
  },
  ai: {}, freelance: {}, bug: {}, career: {}
};

const topicFallbacks = {
  ai:['AI işimizi alınca yazılımcılar','AI’a kodu düzelttirirken kodun tamamen silinmesi','AI ile öğrenen junior’ın yaptığı üç kritik hata'],
  freelance:['Müşterinin “ufak revize” kamyonu','Ödemeyi iş sonunda isteyen yazılımcının dramı','Freelance teklifi nasıl hazırlanır?'],
  bug:['Bug’ı mafyaya sorgulatmak','Çalışan koda dokunan yazılımcı','Bir hatayı doğru raporlamanın üç adımı'],
  career:['CV’deki gereksiz teknoloji mezarlığı','İş görüşmesinde gerçek proje sorusu','90 günlük ilk iş planı']
};

const calendarSeed = [
  ['Skeç','2040 yılında juniorlar'],['Uzmanlık','GitHub profil incelemesi'],['Story','Takipçi seviye anketi'],['Skeç','Müşterinin ufak revizesi'],['Vaka','Bir yol haritası dönüşümü'],['Dinlen/Test','Kanca varyasyonları'],['Satış','5 pilot mentörlük kontenjanı'],
  ['Skeç','AI işimizi alınca'],['Uzmanlık','Portföyde 3 hata'],['Story','CV soru kutusu'],['Skeç','Production’a kod atan junior'],['İnceleme','Takipçi CV analizi'],['Topluluk','Canlı yayın duyurusu'],['Canlı','Junior soru-cevap'],
  ['Skeç','Akrabanın yazıcı isteği'],['Uzmanlık','İlk işe götüren proje'],['Story','Proje oylaması'],['Skeç','Frontend/backend ev arkadaşlığı'],['Vaka','Öğrenci ilerleme raporu'],['Test','En iyi videoyu yeniden kurgula'],['Satış','Başvuru SSS'],
  ['Skeç','Senior: “çok basit”'],['Uzmanlık','6 kurs sıfır proje'],['Story','Hedef alan anketi'],['Skeç','Bug’ı mafyaya sorgulatmak'],['İnceleme','LinkedIn profil analizi'],['Topluluk','Ücretsiz mini workshop'],['Satış','Program sonucu ve CTA'],
  ['Analiz','Ayın kazanan formatı'],['Plan','Sonraki ayın üç serisi']
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const compact = n => Intl.NumberFormat('tr-TR',{notation:'compact',maximumFractionDigits:1}).format(n);
const number = n => Intl.NumberFormat('tr-TR').format(n);
const toast = text => { const el=$('#toast'); el.textContent=text; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),1900); };
const liveState = { followers: 776, posts: [...posts], lastPostAt: new Date('2026-04-01T12:00:00Z'), source: 'seed' };

function switchView(id){
  $$('.view').forEach(v=>v.classList.toggle('active-view',v.id===id));
  $$('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  window.scrollTo({top:0,behavior:'smooth'});
}

$$('[data-view]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.go)));

function renderChart(){
  const max=Math.max(...posts.map(p=>p.views));
  $('#performanceChart').innerHTML=posts.map((p,i)=>`<div class="chart-bar" style="--height:${Math.max(3,(p.views/max)*100)}%"><span>${i+1}. ${p.title}: ${compact(p.views)}</span></div>`).join('');
}

function updateGoal(){
  const current=Math.max(0,liveState.followers||0);
  const pct=Math.min(100,current/10000*100);
  $('#currentFollowers').textContent=number(current);
  $('#goalPercent').textContent=`${pct.toFixed(1).replace('.',',')}%`;
  $('#goalBar').style.width=`${pct}%`;
  $('#remainingFollowers').textContent=number(Math.max(0,10000-current));
  calculateEta();
}

function daysSinceLastPost(){ return Math.max(0,Math.floor((Date.now()-liveState.lastPostAt.getTime())/86400000)); }

function growthModel(){
  const sorted=liveState.posts.map(p=>p.views).filter(Boolean).sort((a,b)=>a-b);
  const recent=(liveState.source==='live'?liveState.posts.slice(0,8):liveState.posts.slice(-8)).map(p=>p.views).filter(Boolean).sort((a,b)=>a-b);
  const sample=recent.length?recent:sorted;
  const median=sample.length?sample[Math.floor(sample.length/2)]:5000;
  const hiatus=daysSinceLastPost();
  const restartPenalty=hiatus>120?.42:hiatus>60?.58:hiatus>30?.75:1;
  const expectedViews=Math.max(2200,Math.round(median*restartPenalty));
  const postsPerWeek=3;
  const followRate=.006;
  const weeklyGrowth=Math.max(20,Math.round(expectedViews*followRate*postsPerWeek));
  return {median,hiatus,restartPenalty,expectedViews,weeklyGrowth};
}

function calculateEta(){
  const model=growthModel();
  const remaining=Math.max(0,10000-liveState.followers);
  const weeks=remaining?Math.ceil(remaining/model.weeklyGrowth):0;
  const eta=new Date(); eta.setDate(eta.getDate()+weeks*7);
  $('#goalEta').textContent=remaining?eta.toLocaleDateString('tr-TR',{month:'long',year:'numeric'}):'Hedef tamamlandı';
  $('#goalEtaNote').textContent=`Baz senaryo: haftada 3 içerik, ilk 8 içerikte paylaşım arası nedeniyle %${Math.round((1-model.restartPenalty)*100)} erişim cezası, yaklaşık ${number(model.weeklyGrowth)} takipçi/hafta. Tahmin garanti değildir.`;
  $('#hiatusDays').textContent=`${number(model.hiatus)} gün`;
}

function viralSignals(idea,goal){
  const text=idea.flat(2).join(' ').toLocaleLowerCase('tr');
  const checks=[
    {name:'net karakter çatışması',hit:includesAny(text,['junior','senior','müşteri','yazılımcı','mülakatçı','ai'])},
    {name:'görünür nesne',hit:includesAny(text,['laptop','macbook','kutu','kamyon','dosya','buton','alarm','ekran','klasör','pano'])},
    {name:'ilk saniye hareketi',hit:includesAny(text,['kaçar','basar','açar','çıkar','düşer','alarm','getir','bırak'])},
    {name:'ortak yazılımcı acısı',hit:includesAny(text,['task','bug','hata','iş','mülakat','revize','proje','github','cv','kurs'])},
    {name:'yükselen olay örgüsü',hit:idea[3]?.length>=3},
    {name:'ters köşe/final',hit:includesAny(text,['final','meğer','işe alır','devrilir','taksi','tamamen'])}
  ];
  const count=checks.filter(x=>x.hit).length;
  const missing=checks.filter(x=>!x.hit).map(x=>x.name);
  let verdict=count>=5?'Güçlü aday':count>=4?'Test edilmeli':'Yeniden kurgula';
  if(goal!=='reach'&&count>=4) verdict=goal==='authority'?'Güven odaklı':'Dönüşüm odaklı';
  return {checks,count,verdict,risk:missing.length?`Eksik sinyal: ${missing.slice(0,2).join(', ')}.`:'Altı temel sinyal de mevcut; başarıyı çekim ve ilk izleyici tepkisi belirler.'};
}

async function refreshLiveData(manual=false){
  const status=$('#liveStatus'); status.textContent='● Veriler çekiliyor…'; status.classList.remove('online');
  try{
    const response=await fetch('/api/live-profile?username=cagrikod',{cache:'no-store'});
    if(!response.ok) throw new Error('Canlı veri alınamadı');
    const data=await response.json();
    if(data.followers) liveState.followers=data.followers;
    if(Array.isArray(data.posts)&&data.posts.length){
      const lessons=new Map(posts.map(p=>[p.code,p.lesson]));
      liveState.posts=data.posts.map(p=>({...p,lesson:lessons.get(p.code)||'Canlı veriden çekildi; formatı düzenli olarak karşılaştır.'}));
      liveState.source='live';
      const latest=Math.max(...data.posts.map(p=>p.timestamp||0)); if(latest) liveState.lastPostAt=new Date(latest*1000);
      const highest=[...liveState.posts].sort((a,b)=>b.views-a.views)[0];
      $('#liveHighestViews').textContent=compact(highest.views);
      $('#liveHighestTitle').textContent=highest.title;
      $('#livePostCount').textContent=number(liveState.posts.length);
    }
    status.textContent=`● Canlı · ${new Date().toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit'})}`; status.classList.add('online');
    updateGoal(); renderLibrary(); makeIdeas();
    if(manual) toast('Profil verileri güncellendi');
  }catch(err){
    status.textContent='● Canlı kaynak geçici olarak kullanılamıyor';
    updateGoal();
    if(manual) toast('Son kayıtlı veriler kullanılıyor');
  }
}

function includesAny(text,words){ return words.some(w=>text.includes(w)); }

function analyzeIdea(e){
  e.preventDefault();
  const idea=$('#ideaText').value.trim();
  const hook=$('#hookInput').value.trim();
  const ending=$('#endingInput').value.trim();
  const duration=Number($('#durationInput').value)||0;
  const format=$('#formatSelect').value;
  const cta=$('#ctaSelect').value;
  const text=`${idea} ${hook} ${ending}`.toLocaleLowerCase('tr');

  let hookScore=38 + Math.min(35,hook.length*1.1);
  if(hook.length>58) hookScore-=18;
  if(includesAny(text,['ilk','asla','neden','2040','son','ufak','sadece','junior','senior'])) hookScore+=12;
  let visual=25;
  if(includesAny(text,['macbook','laptop','telefon','araba','kamyon','kutu','ekran','dosya','buton','alarm','masa'])) visual+=35;
  if(includesAny(text,['kaçar','düşer','getirir','atar','basar','çıkar','döver','kovalar','patlar'])) visual+=25;
  let story=25 + Math.min(35,ending.length*.8);
  if(includesAny(text,['sonunda','final','meğer','ama','birden','çıkar','döner'])) story+=18;
  if(format==='sketch') story+=12;
  let brand=30;
  if(includesAny(text,['yazılım','yazılımcı','kod','bug','junior','senior','frontend','backend','ai','yapay zekâ','freelance','github','cv'])) brand+=48;
  if(includesAny(text,['z kuşağı','genel mizah'])&&!includesAny(text,['kod','yazılım'])) brand-=20;
  let retention=55;
  if(duration>=15&&duration<=32) retention+=25;
  if(duration>60) retention-=30;
  if(duration<12&&format==='sketch') retention-=6;
  if(ending.length>8) retention+=10;
  let money=35;
  if(['review','education','sales'].includes(format)) money+=30;
  if(['comment','sale'].includes(cta)) money+=18;
  if(includesAny(text,['incele','yol haritası','profil','portföy','kariyer','iş'])) money+=15;
  const scores={Kanca:hookScore,Görsellik:visual,Hikâye:story,'Marka uyumu':brand,'İzlenme tutma':retention,'Gelir köprüsü':money};
  Object.keys(scores).forEach(k=>scores[k]=Math.max(10,Math.min(100,Math.round(scores[k]))));
  const total=Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/6);
  const fixes=[];
  if(hookScore<70) fixes.push('Kancayı 8–10 kelimeye indir; sonucu veya çatışmayı ilk cümlede göster.');
  if(visual<70) fixes.push('İlk kareye yazılımı temsil eden görünür bir nesne ve fiziksel hareket ekle.');
  if(story<70) fixes.push('Başlangıç–çatışma–ters köşe final zincirini tamamla.');
  if(brand<70) fixes.push('Şakayı genel mizah yerine junior, senior, müşteri veya debugging problemine bağla.');
  if(retention<70) fixes.push(duration>45?'Tek fikri 15–30 saniyeye indir veya videoyu seri hâline getir.':'Her 3–5 saniyede yeni kadraj, tepki veya bilgi ekle.');
  if(money<70) fixes.push('Skeçten sonra aynı problemi çözen bir uzmanlık içeriği ve anahtar kelimeli CTA planla.');
  if(!fixes.length) fixes.push('Fikir güçlü. İki farklı ilk kare çekip ilk 3 saniye performansını test et.');
  const suggestedHook = hook || (format==='sketch' ? `“${idea.split(/[.!?]/)[0].slice(0,55)}”` : `“Bunu yapıyorsan ${idea.split(' ').slice(0,5).join(' ')} konusunda zaman kaybediyorsun.”`);
  const script=`0–1 sn: ${suggestedHook}\n1–6 sn: Problemi açıklama yapmadan görüntüyle göster.\n6–18 sn: Durumu iki aşamada büyüt.\nFinal: ${ending||'Beklenmedik fakat yazılım problemiyle ilgili net bir ters köşe ekle.'}\nCTA: ${cta==='sale'?'“Kendi yol haritan için YOL yaz.”':cta==='comment'?'“Bunu yaşayanlar JUNIOR yazsın.”':cta==='save'?'“Sonra uygulamak için kaydet.”':'“Bunu yaşayan yazılımcıya gönder.”'}`;

  $('#analysisEmpty').classList.add('hidden'); $('#analysisResult').classList.remove('hidden');
  $('#totalScore').textContent=total; $('#scoreCircle').style.setProperty('--score',total);
  $('#scoreLabel').textContent=total>=80?'Yayınlamaya yakın':total>=65?'Geliştirilebilir':'Yeniden kurgula';
  $('#resultTitle').textContent=total>=80?'Güçlü fikir':total>=65?'Potansiyeli var':'Şu hâliyle zayıf';
  $('#resultSummary').textContent=total>=80?'Geçmişte çalışan formatlarına güçlü biçimde uyuyor. Çekimde ilk saniyeyi koru.':total>=65?'Temel fikir çalışabilir; aşağıdaki düzeltmeler dağıtım ve dönüşüm ihtimalini artırır.':'Fikir hedef kitlene veya görsel hikâye yapına yeterince bağlı değil.';
  $('#scoreBars').innerHTML=Object.entries(scores).map(([k,v])=>`<div class="bar-row"><span>${k}</span><div class="mini-bar"><i style="--value:${v}%"></i></div><b>${v}</b></div>`).join('');
  $('#fixList').innerHTML=fixes.map(f=>`<li>${f}</li>`).join('');
  $('#scriptSuggestion').textContent=script;
  localStorage.setItem('kr-last-analysis',JSON.stringify({idea,hook,ending,duration,format,cta}));
}

function makeIdeas(){
  const goal=$('#goalChips .active').dataset.value;
  const topic=$('#topicChips .active').dataset.value;
  let ideas=ideaBank[topic]?.[goal];
  if(!ideas){
    ideas=topicFallbacks[topic].map((title,i)=>[title, goal==='lead'?'Konuyu gerçek bir takipçi vakası ve başvuruyla bağla.':'Konuyu karakterli, nesneli bir mini hikâyeye dönüştür.',`“${title}”`,['İlk karede sonucu göster','Problemi büyüt','Net final ve tek CTA']]);
  }
  $('#ideaCards').innerHTML=ideas.map((x,i)=>{const proof=viralSignals(x,goal);return `<article class="idea-card"><span class="tag">${goal==='reach'?'ERİŞİM':goal==='authority'?'OTORİTE':'DÖNÜŞÜM'} · ${i+1}</span><div class="viral-proof"><div class="viral-proof-head"><span>Geçmiş kazanan formatına uyum</span><strong>${proof.verdict} · ${proof.count}/6</strong></div><div class="signal-dots">${proof.checks.map(s=>`<i class="${s.hit?'on':''}" title="${s.name}"></i>`).join('')}</div><small>${proof.checks.filter(s=>s.hit).map(s=>s.name).join(' · ')}</small></div><p class="risk-note">${proof.risk}</p><h2>${x[0]}</h2><p>${x[1]}</p><div class="hook">${x[2]}</div><ul>${x[3].map(s=>`<li>${s}</li>`).join('')}</ul><footer><button class="secondary use-idea" data-title="${x[0].replaceAll('"','&quot;')}" data-hook="${x[2].replaceAll('"','&quot;')}">Analizöre gönder →</button></footer></article>`}).join('');
  $$('.use-idea').forEach(b=>b.addEventListener('click',()=>{ $('#ideaText').value=b.dataset.title; $('#hookInput').value=b.dataset.hook; $('#formatSelect').value=goal==='reach'?'sketch':goal==='authority'?'education':'sales'; switchView('analyzer'); }));
}

function renderLibrary(){
  const q=$('#librarySearch').value.toLocaleLowerCase('tr');
  const filter=$('#libraryFilter').value;
  const filtered=liveState.posts.filter(p=>p.title.toLocaleLowerCase('tr').includes(q)).filter(p=>filter==='all'||(filter==='viral'&&p.views>=50000)||(filter==='mid'&&p.views>=10000&&p.views<50000)||(filter==='low'&&p.views<10000));
  $('#libraryTable').innerHTML=`<table><thead><tr><th>İçerik</th><th>İzlenme</th><th>Beğeni</th><th>Durum</th><th>Süre</th><th>Çıkarım</th></tr></thead><tbody>${filtered.map(p=>{const cls=p.views>=50000?'viral':p.views>=10000?'mid':'low';return `<tr><td><strong>${p.title}</strong><small>${p.type}</small></td><td><b>${compact(p.views)}</b></td><td>${number(p.likes)}</td><td><span class="performance-pill ${cls}">${cls==='viral'?'Viral':cls==='mid'?'Orta':'Düşük'}</span></td><td>${p.duration} sn</td><td><small>${p.lesson}</small></td></tr>`}).join('')}</tbody></table>`;
}

function renderCalendar(){
  const done=JSON.parse(localStorage.getItem('kr-plan-done')||'[]');
  $('#calendar').innerHTML=calendarSeed.map((item,i)=>`<article class="day ${done.includes(i)?'done':''}"><div class="day-head"><span>Gün ${i+1}</span><span>${item[0]}</span></div><h3>${item[1]}</h3><p>${item[0]==='Skeç'?'Erişim ve paylaşım':'Güven, topluluk veya dönüşüm'}</p><button data-day="${i}">${done.includes(i)?'Geri al':'Tamamlandı'}</button></article>`).join('');
  $$('#calendar [data-day]').forEach(b=>b.addEventListener('click',()=>{ const i=Number(b.dataset.day); const next=done.includes(i)?done.filter(x=>x!==i):[...done,i]; localStorage.setItem('kr-plan-done',JSON.stringify(next)); renderCalendar(); }));
}

function exportPlan(){
  const text=['KODRADAR — 30 GÜNLÜK İÇERİK PLANI','',...calendarSeed.map((x,i)=>`Gün ${i+1} | ${x[0]} | ${x[1]}`),'','Funnel: Skeç → Uzmanlık → Vaka → Başvuru'].join('\n');
  const blob=new Blob([text],{type:'text/plain;charset=utf-8'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='kodradar-30-gunluk-plan.txt'; a.click(); URL.revokeObjectURL(a.href); toast('Plan indirildi');
}

$$('.chips').forEach(group=>group.addEventListener('click',e=>{ if(!e.target.classList.contains('chip'))return; group.querySelectorAll('.chip').forEach(c=>c.classList.remove('active')); e.target.classList.add('active'); makeIdeas(); }));
$('#ideaForm').addEventListener('submit',analyzeIdea);
$('#generateIdeas').addEventListener('click',makeIdeas);
$('#copyScript').addEventListener('click',async()=>{ await navigator.clipboard.writeText($('#scriptSuggestion').textContent); toast('Senaryo kopyalandı'); });
$('#librarySearch').addEventListener('input',renderLibrary); $('#libraryFilter').addEventListener('change',renderLibrary);
$('#refreshLive').addEventListener('click',()=>refreshLiveData(true));
$$('.copy-ready').forEach(button=>button.addEventListener('click',async()=>{
  const value=decodeURIComponent(button.dataset.copy);
  await navigator.clipboard.writeText(value);
  toast('Hazır metin kopyalandı');
}));
$('#resetPlan').addEventListener('click',()=>{localStorage.removeItem('kr-plan-done');renderCalendar();toast('Plan sıfırlandı');});
$('#exportPlan').addEventListener('click',exportPlan);
$('#themeToggle').addEventListener('click',()=>{ const dark=document.documentElement.dataset.theme==='dark'; document.documentElement.dataset.theme=dark?'':'dark'; localStorage.setItem('kr-theme',dark?'light':'dark'); });

function init(){
  if(localStorage.getItem('kr-theme')==='dark') document.documentElement.dataset.theme='dark';
  const last=JSON.parse(localStorage.getItem('kr-last-analysis')||'null'); if(last){ $('#ideaText').value=last.idea; $('#hookInput').value=last.hook; $('#endingInput').value=last.ending; $('#durationInput').value=last.duration; $('#formatSelect').value=last.format; $('#ctaSelect').value=last.cta; }
  renderChart(); updateGoal(); makeIdeas(); renderLibrary(); renderCalendar(); refreshLiveData(false);
  setInterval(()=>refreshLiveData(false),10*60*1000);
}
init();
