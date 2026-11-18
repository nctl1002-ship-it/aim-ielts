// Generated at build time.
const CACHE = "aim-ielts-2dfb21e411";
const PRECACHE = ["./","apple-touch-icon.png","be-vietnam-pro-latin-400-normal-b8ymZRaE.woff2","be-vietnam-pro-latin-500-normal-BFUaPJDQ.woff2","be-vietnam-pro-latin-600-normal-2BKReCdn.woff2","be-vietnam-pro-latin-700-normal-IuSBdXyQ.woff2","be-vietnam-pro-latin-ext-400-normal-0slToPcK.woff2","be-vietnam-pro-latin-ext-500-normal-GzipT5gY.woff2","be-vietnam-pro-vietnamese-400-normal-zlEY3-7j.woff2","be-vietnam-pro-vietnamese-500-normal-TANtbk6n.woff2","be-vietnam-pro-vietnamese-600-normal-CrdqsjGL.woff2","be-vietnam-pro-vietnamese-700-normal-CWMsmEuB.woff2","decks.json","icon-192.png","icon-512.png","icon-maskable-512.png","img-done.png","img-logo.png","img-onb-learn.png","img-onb-welcome.png","img-stat-cards.png","img-stat-clock.png","img-stat-new.png","index-BMdBjbSl.js","index-BZaIAuth.css","index.html","manifest.webmanifest"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("./index.html").then((r) => r || caches.match("./"))));
    return;
  }
  e.respondWith(caches.match(req).then((r) => r || fetch(req)));
});
