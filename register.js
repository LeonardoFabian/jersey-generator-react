/**
 * Validate if Service Worker exists in Browser
 */

if (navigator.serviceWorker) {
  console.log("Service Worker detectado!");

  // Register Service Worker
  navigator.serviceWorker.register("./sw.js");
}
