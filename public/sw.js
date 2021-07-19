const version = 2.0;

self.addEventListener('install', function installHandler(installEvent) {
  console.log('Service worker installed.');
  skipWaiting();
});

self.addEventListener('fetch', function fetchHandler(fetchEvent) {
  // console.log('Service worker fetch handler.');
});

// TODO: fix sw errors
// MIME type error when sw.js is sw.ts
// Is the service worker interfering with the built-in NextJS caching?
// TypeError: Failed to execute 'fetch' on 'WorkerGlobalScope': 'only-if-cached' can be set only with 'same-origin' mode
// https://stackoverflow.com/questions/48463483/what-causes-a-failed-to-execute-fetch-on-serviceworkerglobalscope-only-if
// Maybe all fetch request events should just pass through the listener? Do you need to actually invoke fetch in the handler?
// Would it be worth using next-pwa? Are there other tricky things to configure it from scratch
