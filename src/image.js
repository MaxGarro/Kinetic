//Imagenes
var sources = {
    back      : 'fondo2.png',
    panel     : 'map.png',
    carta1    : 'carta3.jpg',
    carta2    : 'carta2.jpg',
    carta4   : 'carta4.png',
    btnataque : 'btnataque.png',
    anim1     : 'anim1.png',
    heroe     : 'blob-sprite.png',
    enemy     : 'enemy.png'
};
//Funcion de carga
function loadImages(sources, callback) {
    var assetDir     = 'assets/';
    var images       = {};
    var loadedImages = 0;
    var numImages    = 0;
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();

      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = assetDir + sources[src];
    }
}
