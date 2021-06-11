console.log("Registrado!");

// All Network routes request to store in Cache
const CACHE_ELEMENTS = [
  "https://unpkg.com/react@17/umd/react.production.min.js",
  "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "./style.css",
  "./components/Jersey.js",
];

// Cache name
const CACHE_NAME = "v1_cache_jersey_generator_react";

/**
 * SERVICE WORKER LIVE CICLE
 * Service Worker Events
 */

/**
 * STEP 1 : INSTALL
 */
self.addEventListener("install", (e) => {
  console.log(e);

  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache
        .addAll(CACHE_ELEMENTS)
        .then(() => {
          self.skipWaiting();
        })
        .catch((error) => console.log(error));
    })
  );
});

/**
 * STEP 2 : ACTIVATE
 */
self.addEventListener("activate", (e) => {
  console.log(e);

  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cachesNames) => {
        console.log("Caches keys names: " + cachesNames);

        return Promise.all(
          cachesNames.map((cacheName) => {
            return (
              cacheWhitelist.indexOf(cacheName) === -1 &&
              caches.delete(cacheName)
            );
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

/**
 * STEP 3 : ACTIVATE
 *
 * Este evento se ejecuta al hacer una peticion Inspeccionar -> Network
 * captura o retorna una nueva version de nuestros archivos en cache
 *
 */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }

      return fetch(e.request);
    })
  );
});
