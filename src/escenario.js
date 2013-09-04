function initStage(images) {
  //Creamos el escenario
  var escenarioWidth  = 640;
  var escenarioHeight = 480;

  var escenario = new Kinetic.Stage({
      container: 'container',
      width    : escenarioWidth,
      height   : escenarioHeight
  });

  //Fondo
  var background  = new Kinetic.Layer();
  var panel       = new Kinetic.Layer();
  var principal   = new Kinetic.Layer();

  var imgFondo = new Kinetic.Image({
    image: images.back,
    x: 0,
    y: 0,
    width: 640,
    height: 480
  });

  var imgPanel = new Kinetic.Image({
    image: images.panel,
    x: 0,
    y: 480-128,
    width: 640,
    height: 128
  });

  //Cargamos las imagenes
  background.add(imgFondo);
  panel.add(imgPanel);

  //Personajes
  heroe = new personaje(1,'heroe');
  principal.add(heroe.sprite);
  heroe.sprite.start();
  ControldeAtaque = new carta(heroe,1,images.carta1.src);
  ControldeAtaque2 = new carta(heroe,9,images.carta2.src);

  ControldeAtaque.card.on('click',function(){  
    ControldeAtaque.card.setOpacity(0);
    ControldeAtaque.card.destroy();
    escenario.draw();
  });

  ControldeAtaque2.card.on('click',function(){  
    ControldeAtaque2.card.setOpacity(0);
    ControldeAtaque2.card.destroy();
    escenario.draw();
  });

  panel.add(ControldeAtaque.card);
  panel.add(ControldeAtaque2.card);
  //agregamos al escenario
  escenario.add(background);
  escenario.add(panel);
  escenario.add(principal);
  escenario.draw();

}
  