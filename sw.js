'use strict';
const CACHE='trilingual-code-academy-rc3-final-acceptance-20260913';
const CORE=['./','./index.html','./final-acceptance.html','./offline.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k.startsWith('trilingual-code-academy-')).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 if(event.request.mode==='navigate'){
   event.respondWith(fetch(event.request).then(r=>{if(r&&r.ok&&new URL(event.request.url).origin===self.location.origin){const c=r.clone();caches.open(CACHE).then(x=>x.put(event.request,c)).catch(()=>{});}return r;}).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html').then(x=>x||caches.match('./offline.html')))));
   return;
 }
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{if(r&&r.ok&&new URL(event.request.url).origin===self.location.origin){const c=r.clone();caches.open(CACHE).then(x=>x.put(event.request,c)).catch(()=>{});}return r;})));
});
