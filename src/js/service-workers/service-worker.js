var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  '/',
  '/css/main.css',
  '/img/badge.svg',
  '/img/home_hero.jpg',
  '/img/home_hero-x2.jpg',
  '/img/home_hero_mobile.jpg',
  '/img/home_hero_mobile-x2.jpg',
  '/img/venue-card.jpg',
  '/img/venue-card-x2.jpg',
  '/img/venue-card-mobile.jpg',
  '/img/venue-card-mobile-x2.jpg',
  '/fonts/florencesans-sc.outline-webfont.eot',
  '/fonts/florencesans-sc.outline-webfont.svg',
  '/fonts/florencesans-sc.outline-webfont.ttf',
  '/fonts/florencesans-sc.outline-webfont.woff',
  '/fonts/florencesans-sc.outline-webfont.woff2',
  '/js/vendor/jquery.min.js',
  '/js/vendor/picturefill.min.js',
  '/js/vendor/require.js'
];

self.addEventListener('install', function(event) {
  console.warn('--> Installing service worker');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
  );
});