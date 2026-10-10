// Caches the app shell so it opens instantly and without network. Data sync is handled by Firestore's own offline cache.
const CACHE = "yongle-v15";
const SHELL = ["./", "index.html", "firebase-config.js", "manifest.webmanifest", "icon.svg", "icon-180.png", "icon-192.png", "icon-512.png", "logos/muzfafa.jpg", "logos/sekai.jpg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (u.origin === location.origin) {
    // network first for our own files so updates show up, cache as fallback when offline
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
  } else if (u.host === "www.gstatic.com" || u.host.endsWith("fonts.googleapis.com") || u.host.endsWith("fonts.gstatic.com")) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return res; })));
  }
});
