// Minimal service worker for The Grelfand Plan.
//
// This exists ONLY so Chrome on Android treats the page as installable
// (so "Add to Home Screen" opens it full-screen, no address bar) and so
// the manual install option behaves consistently across Chrome versions.
//
// It deliberately does NOT cache anything and does NOT serve any content
// offline — every request still goes straight to the network exactly as
// it would without this file. That's intentional: this app's whole point
// is to stay in sync with a live Google Sheet, so caching old responses
// would risk showing stale meal-plan data instead of the real synced data.
//
// If you ever want real offline support later, this is the file you'd
// extend with a cache strategy — but for now it's a no-op on purpose.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Always just pass the request straight through to the network.
  event.respondWith(fetch(event.request));
});
