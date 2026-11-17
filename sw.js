// Yardbell Live – minimaler Service Worker (nur für „App installieren“, kein Zwischenspeichern der Live-Daten)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
