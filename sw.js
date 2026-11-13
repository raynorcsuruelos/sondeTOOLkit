const CACHE = 'sonde-toolkit-v14.8.1-static-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest',
 './icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
 event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
 event.waitUntil((async () => {
   const keys = await caches.keys();
   await Promise.all(keys.filter(key => key.startsWith('sonde-toolkit-') && key !== CACHE).map(key => caches.delete(key)));
   await self.clients.claim();
 })());
});
self.addEventListener('fetch', event => {
 const req = event.request;
 if(req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
 const path = new URL(req.url).pathname;
 if(!ASSETS.some(asset => new URL(asset, self.registration.scope).pathname === path)) return;
 event.respondWith((async () => {
   try {
     const response = await fetch(req);
     if(response.ok) { const cache = await caches.open(CACHE); await cache.put(req, response.clone()); }
     return response;
   } catch (_) {
     return (await caches.match(req)) || Response.error();
   }
 })());
});
