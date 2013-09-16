var personaje = function(id,bando,img){
        this.id           = new Number(id);
        if (bando == 'heroe') {
          this.animation    = {
                              movimiento:[
                                      {x: 2  ,y: 2  , width: 70 , height: 119}, 
                                      {x: 71 ,y: 2  , width: 74 , height: 119}, 
                                      {x: 146,y: 2  , width: 81 , height: 119}, 
                                      {x: 226,y: 2  , width: 76 , height: 119}
                                    ],
                              golpe:[
                                      {x: 2  ,y: 138, width: 74 , height: 122}, 
                                      {x: 76 ,y: 138, width: 84 , height: 122}, 
                                      {x: 346,y: 138, width: 120, height: 122}
                                    ],
                              corrida:[
                                      {x: 414,y: 2, width: 78 , height: 119}, 
                                      {x: 492,y: 2, width: 87 , height: 119}, 
                                      {x: 579,y: 2, width: 65 , height: 119},
                                      {x: 644,y: 2, width: 59 , height: 119}
                                    ]
                              };

        }else{
         this.animation    = {
                              movimiento: [
                                            {x: 0  ,y: 0  , width: 139 , height: 132}
                                          ],
                              salto:[
                                      {x: 0  ,y: 260, width: 138 , height: 115}, 
                                      {x: 137 ,y: 260, width: 152 , height: 100}, 
                                      {x: 288,y: 260, width: 133, height: 103},
                                      {x: 420 ,y: 260, width: 115 , height: 100}
                                    ],
                              golpe:[
                                      {x: 536 ,y: 260, width: 164 , height: 130}
                                    ],
                              slash:[
                                      {x: 700 ,y: 261, width: 255 , height: 159}
                                    ],
                              walk :[
                                      {x: 140,y: 0, width: 120 , height: 138}, 
                                      {x: 260,y: 0, width: 140 , height: 130}, 
                                      {x: 400,y: 0, width: 110 , height: 132},
                                      {x: 510,y: 0, width: 137 , height: 132},
                                      {x: 643,y: 0, width: 155 , height: 130},
                                      {x: 796,y: 0, width: 99 , height: 133}
                                    ]
                            };
        }
        //Cargar imagenes
        this.imagenSprite = new Image();
        this.imagenSprite.src = img;

        //Posicion del personaje
        if(bando == 'heroe'){
                this.x = 100;
                this.y = 200;   
        }else{
                this.x = 500;
                this.y = 200;    
        }

        this.sprite = new Kinetic.Sprite({
          x: this.x,
          y: this.y,
          image: this.imagenSprite,
          animation: 'movimiento',
          animations: this.animation,
          frameRate: 5,
          index: 0
        });
        var sprites = this.sprite;


}
personaje.prototype.ataque = function(escenario) {
        var sprites = this.sprite;
        var Ataque = new Kinetic.Tween({
          node: sprites,
          duration: 1,
          x: 400, 
          y:200,
          easing: Kinetic.Easings.EaseInOut,
          onFinish: function() {  

                sprites.setAnimation('golpe'); 
                sprites.afterFrame(2, function() {
                        sprites.setAnimation('movimiento');
                        Ataque.reverse();
                        escenario.setListening(true);
                }); 
          }

        });

        Ataque.play();


}

personaje.prototype.ataque2 = function(escenario,anim,de,a) {
    
    var x = 450;
    var y = 150;
    explosionSprite.setX(x);
    explosionSprite.setY(y);
    explosionSprite.show();
    explosionSprite.afterFrame(6,function(){
        explosionSprite.stop();
        explosionSprite.hide();
        escenario.draw();
        escenario.setListening(true); 
    });
    explosionSprite.start();  


}