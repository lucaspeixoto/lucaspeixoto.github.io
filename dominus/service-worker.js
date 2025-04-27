const CACHE_NAME = "dominus-v0.9.0";
const urlsToCache = [
  "./index.html",
  "./styles.css",
  "./scenarios.js",
  "./script.js",
  "./jquery-3.7.1.min.js",
  "./html2pdf.bundle.min.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./character.png",
];

// Instala e pré-cacheia os arquivos
self.addEventListener("install", (event) => {
  self.skipWaiting(); // força ativação imediata
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Ativa e limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // remove cache antigo
          }
        })
      )
    )
  );
  self.clients.claim(); // assume controle imediatamente
});

// Intercepta as requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Se encontrar no cache, retorna. Senão, busca da rede e atualiza o cache
      return (
        response ||
        fetch(event.request).then((fetchResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }).catch(() => {
          // Se falhar, retorna o arquivo offline (se existir)
          return caches.match("./index.html");
        })
      );
    })
  );
});