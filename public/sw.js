const CACHE_NAME = 'cevi21-v12';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './mesero.html',
    './caja.html',
    './reportes.html',
    './manifest.json',
    './logo.png'
];

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);

    // NETWORK FIRST for HTML and Root
    if (e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
        e.respondWith(
            fetch(e.request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
                    return response;
                })
                .catch(() => caches.match(e.request))
        );
    } else {
        // CACHE FIRST for static assets
        e.respondWith(
            caches.match(e.request).then((response) => response || fetch(e.request))
        );
    }
});
