self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('agenda-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './css/style.css',
        './js/script.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
