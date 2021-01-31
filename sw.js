self.addEventListener("install", e => {
    e.waituntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./css/main.css", "./images/slash.png"])
        })
    );
});
 
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});

