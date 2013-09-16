var carta = function(heroe,num,imagen,escenario){

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
          escenario.setListening(false);   
          heroe.ataque(escenario);
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

var carta_mini = function(heroe,x,y,imagen,escenario){

        this.img = new Image();
        this.img.src = imagen;
                
        this.card = new Kinetic.Image({
                image: this.img,
                x: 10 * x,//(num * this.img.width),
                y: 480-118 + y,
                width: 20,
                height: 30
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

var btn = function(heroe,num,imagen,escenario){

        this.img = new Image();
        this.img.src = imagen;
                
        this.btn = new Kinetic.Image({
                image: this.img,
                x: 10,//(num * this.img.width),
                y: 480-118 + num,
                width: 74,
                height: 48
        });

        //Eventos
        this.btn.on('click',function(){ 
          
        });

        //Agrego cursor
        this.btn.on('mouseover', function() {
          document.body.style.cursor = 'pointer';
         // tween.play();
        });

        //Quito cursor
        this.btn.on('mouseout', function() {
          document.body.style.cursor = 'default';
        });
}