const CACHE_NAME = 'workout-app-v1';
const urlsToCache = [
  '/leejusuk208.github.io/',
  '/leejusuk208.github.io/index.html',
  '/leejusuk208.github.io/manifest.json'
];

// 서비스 워커 설치 및 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// 자원 요청 시 캐시 우선 제공 후 네트워크 요청
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
