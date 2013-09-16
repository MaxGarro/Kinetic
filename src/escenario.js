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
    width: 400,
    height: 128
  });

  //Cargamos las imagenes
  background.add(imgFondo);
  panel.add(imgPanel);

  //Personajes
  heroe = new personaje(1,'heroe',images.heroe.src);
  enemy = new personaje(2,'enemy',images.enemy.src);
  principal.add(heroe.sprite);
  principal.add(enemy.sprite);
  heroe.sprite.start();
  enemy.sprite.start();
  //genero una carta y le paso
  //a quien afecta
  //el multiplicador de espacio en x
  //y la ruta de la imagen sacada del surce
  btnataque = new btn(heroe,1,images.btnataque.src,escenario);
  btndefensa = new btn(heroe,55,images.btnataque.src,escenario);
  ControldeAtaque = new carta(heroe,9,images.carta1.src,escenario);
  ControldeAtaque2 = new carta(heroe,18,images.carta2.src,escenario);
  ControldeAtaque_enemy = new carta(enemy,53,images.carta4.src,escenario);
  Cartamini_enemy = new carta_mini(enemy,61,1,images.carta4.src,escenario);
  Cartamini_enemy2 = new carta_mini(enemy,61,36,images.carta4.src,escenario);
  Cartamini_enemy3 = new carta_mini(enemy,61,72,images.carta4.src,escenario);

  anim = new animation(heroe,images.anim1,principal);

  btnataque.btn.on('click',function(){
    escenario.draw();
  });

  btndefensa.btn.on('click',function(){
    escenario.setListening(false);   
    heroe.ataque2(escenario,anim,heroe,enemy);
    escenario.draw();

  });

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

  ControldeAtaque_enemy.card.on('click',function(){

    ControldeAtaque.card.setOpacity(0);
    ControldeAtaque.card.destroy();
    escenario.draw();
  });

  panel.add(btnataque.btn);
  panel.add(btndefensa.btn);
  panel.add(ControldeAtaque.card);
  panel.add(ControldeAtaque2.card);
  panel.add(ControldeAtaque_enemy.card);
  panel.add(Cartamini_enemy.card);
  panel.add(Cartamini_enemy2.card);
  panel.add(Cartamini_enemy3.card);
  //agregamos al escenario
  escenario.add(background);
  escenario.add(panel);
  escenario.add(principal);
  escenario.draw();

}
  