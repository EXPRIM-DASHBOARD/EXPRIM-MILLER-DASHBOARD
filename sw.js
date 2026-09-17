/* ELO · service worker: rede primeiro, cache só p/ abrir sem internet */
const C='elo-v9-16c', PFX='elo-v9-';
self.addEventListener('install',e=>{ self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(
  caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C&&k.startsWith(PFX)).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin) return; /* Firebase/API: sempre rede */
  e.respondWith(fetch(e.request).then(r=>{
      if(r&&r.ok&&(r.type==='basic'||r.type==='default')){ const cp=r.clone(); caches.open(C).then(c=>c.put(e.request,cp)); }
      return r; })
    .catch(()=>caches.match(e.request).then(m=>m||new Response('<!doctype html><meta charset=utf-8><body style="font:15px system-ui;padding:24px">Sem internet e sem cópia salva desta página.<br>Reconecte e recarregue (F5).',{status:503,headers:{'Content-Type':'text/html; charset=utf-8'}}))));
});
