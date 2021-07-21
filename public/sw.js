const version = 2.0;

self.addEventListener('install', function installHandler(installEvent) {
  console.log('Service worker installed.');
  skipWaiting();
});

self.addEventListener('fetch', function fetchHandler(fetchEvent) {
  // console.log('Service worker fetch handler.');
});