// Hayatta Kal service worker: uygulama kabuğu önbellekte, harita karoları görüldükçe saklanır.
const SURUM = "hk-v4";
const KABUK = ["./", "index.html", "styles.css", "app.js", "content.js", "content2.js", "atc.js", "vendor/xlsx.full.min.js", "manifest.webmanifest",
  "leaflet/leaflet.js", "leaflet/leaflet.css", "leaflet/images/marker-icon.png", "leaflet/images/marker-icon-2x.png",
  "leaflet/images/marker-shadow.png", "leaflet/images/layers.png", "leaflet/images/layers-2x.png",
  "icons/icon-192.png", "icons/icon-512.png"];
const KARO = "hk-karolar";
const KARO_SINIR = 6000;

self.addEventListener("install", e => { e.waitUntil(caches.open(SURUM).then(c => c.addAll(KABUK)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SURUM && k !== KARO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (u.hostname === "tile.openstreetmap.org" || u.hostname.endsWith("tile.opentopomap.org")) {
    e.respondWith(caches.open(KARO).then(async c => {
      const var_ = await c.match(e.request);
      if (var_) return var_;
      try {
        const r = await fetch(e.request);
        if (r.ok || r.type === "opaque") { c.put(e.request, r.clone()); budama(c); }
        return r;
      } catch (err) { return new Response("", { status: 504 }); }
    }));
    return;
  }
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request).then(res => {
    const kopya = res.clone(); caches.open(SURUM).then(c => c.put(e.request, kopya)); return res;
  }).catch(() => caches.match("index.html"))));
});
let budaniyor = false;
async function budama(c) {
  if (budaniyor) return; budaniyor = true;
  try { const k = await c.keys(); for (let i = 0; i < k.length - KARO_SINIR; i++) await c.delete(k[i]); } finally { budaniyor = false; }
}
