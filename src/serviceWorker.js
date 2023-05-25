const deliveryCache = 'delivery-cache-site-v1.0.0';

const datosCacheDelivery = [
  "/index.html",
  "/styles.css",
  '/scrpt/scrpts.js',
  '/img-src/pikapika.webp',
  '/img-src/sayaka.webp',
  '/webComponents/CardElement/cardElement.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(deliveryCache)
      .then(cache => {cache.addAll(datosCacheDelivery);})
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {return response || fetch(event.request);})
  );
});
