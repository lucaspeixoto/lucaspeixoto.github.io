const CACHE_NAME = "dominus-v1";
const urlsToCache = [
    "./index.html",
    "./styles.css",
    "./script.js",
    "./jquery-3.7.1.min.js",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png"
  ];

self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
  });
  

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});