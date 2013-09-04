var carta = function(heroe,num,imagen){

        this.img = new Image();
        this.img.src = imagen;
                
        this.card = new Kinetic.Image({
                image: this.img,
                x: 10 * num,//(num * this.img.width),
                y: 480-118,
                width: 70,
                height: 108
        });

        //Eventos
        this.card.on('click',function(){  
          heroe.ataque();
        });

        //Agrego cursor
        this.card.on('mouseover', function() {
          document.body.style.cursor = 'pointer';
         // tween.play();
        });

        //Quito cursor
        this.card.on('mouseout', function() {
          document.body.style.cursor = 'default';
        });
}