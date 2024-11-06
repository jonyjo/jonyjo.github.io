const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/newpage.html',
    '/style.css',
    '/manifest.json',
    '/favicon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).then(() => {
        self.skipWaiting();
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((response) => {
      return response || (event.request.url.startsWith(self.location.origin) ? fetch(event.request) : caches.match('offline'));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Add event listener for push notifications (optional)
self.addEventListener('push', (event) => {
  console.log('Received push notification');
  // Handle push notification
});

// Add event listener for notification click (optional)
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked');
  // Handle notification click
});
