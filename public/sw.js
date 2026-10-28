/* Minimal service worker for Harsha Sir Classes.
 * Intentionally does not intercept/cache requests, so Next.js assets and API
 * requests continue to use their normal network behavior.
 */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
