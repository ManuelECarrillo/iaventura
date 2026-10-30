// Service worker de IAventura: guarda lo que se va abriendo para que funcione sin internet.
// Páginas: primero red (para tener lo último), si no hay red usa la copia.
// Archivos estáticos (_next/static, íconos, fuentes): primero copia.
const CACHE = "iaventura-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(["/", "/album", "/bit", "/papas"])).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const estatico = url.pathname.startsWith("/_next/static/") || /\.(png|svg|ico|woff2?)$/.test(url.pathname) || url.host.includes("fonts.g");
  if (estatico) {
    e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => {
      const copia = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copia));
      return res;
    })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(req).then((res) => {
    const copia = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copia));
    return res;
  }).catch(() => caches.match(req).then((r) => r || caches.match("/"))));
});
