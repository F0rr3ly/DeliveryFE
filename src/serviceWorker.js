const deliveryCache = "delivery-cache-site-v1.0.0";

const datosCacheDelivery = [
  "/",
  "index.html",
  "style.css",
  "scrpts/scrpts.js",
  "img-src/pikapika.webp",
  "img-src/sayaka.webp",
  "webComponents/CardElement/cardElement.js"
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(deliveryCache);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll([
        "/",
        "index.html",
        "style.css",
        "img-src/pikapika.webp",
        "webComponents/CardElement/cardElement.js",
        "img-src/sayamiki.webp"
      ]);
    })()
  );
});

/* self.addEventListener('install',  
event => {
  event.waitUntil( 
    caches.open(deliveryCache)
      .then(cache => {return cache.addAll([
        "index.html",
        "style.css",
        "img-src/pikapika.webp",
        "webComponents/CardElement/cardElement.js",
        "img-src/sayamiki.webp"
      ])})


  );
}); */

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(deliveryCache);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});


/* self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {return response || fetch(event.request);})
  );
}); */
