//Imagenes
var sources = {
    back      : 'fondo2.png',
    panel     : 'map.png'
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