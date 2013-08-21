var personaje = function(id,bando){
        this.id           = new Number(id);
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
        //Cargar imagenes
        this.imagenSprite = new Image();
        this.imagenSprite.src = 'assets/blob-sprite.png';

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
personaje.prototype.ataque = function() {
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
                }); 
          }
        });
        Ataque.reverse().play();

}