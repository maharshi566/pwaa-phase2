self.addEventListener("install",function(event){
event.waitUntil(
caches.open("tinnavara").then(function(cache){
  return cache.addAll([
    "./index.html",
    ".css/form.css",
    ".css/resume.css",
    ".css/index.css",
   ".js/store.js",
   ".js/resume.js",
   ".js/get.js"

  ]);
})
);


});
self.addEventListener("fetch",function(event){
event.respondWith(
caches.match(event.request).then(function(reponse){
return reponse || fetch(event.request).then(
  function (response) {
    caches.open("tinnavara").then(function(cache){
      return cache.put(event.request,response.clone());

    })


  });

})
);
});
