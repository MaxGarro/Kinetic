var carta = function(heroe){
        this.img = new Image();
        this.img.src = 'assets/carta2.jpg';
                
        this.card = new Kinetic.Image({
                image: this.img,
                x: 10,
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