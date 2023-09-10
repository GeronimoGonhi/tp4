https://www.youtube.com/watch?v=MsLL8yvoJ9E


let posPersonajeX, posPersonajeY; // Posición del personaje
let arriba, adelante, atras, abajo = false
let posYPrimerPiso, posYSegundoPiso, posYTercerPiso;
let personajeSpeed;
let pantalla='inicio'
  //parametros enemigos
let x;
let yOpciones = [];  // Posibles posiciones "Y" para el enemigo
let diametro = 50;
let velocidad;
let gameover = false;  // Variable para verificar si el personaje esta en contacto con el enemigo
let x2;
let diametro2 = 80;
let velocidad2;
let gameover2 = false;
//parametros de los puntos
let xPuntos;
let diametroPuntos = 30;
let velocidadPuntos;
let puntoAnotado = false;  // Variable para verificar si el personaje toco el punto
let cantidadPuntos= 0;
let textRandomDePerdiste = ["Game Over", "GG", "Fracasado", "Ni lo intentaste", ":^]", "Juego Perdido", "Perdido Juego", "¿Es lo mejor que tenés?", "Nunca vi a alguien perder tan rapido", "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm?", "nt", "GG no team", "Es que me va lag", "Mi primo agarró la pc y...", "Juro que no soy tan malo :'(", "Game Over", "Game Over", "Game Over", "Se quedaron sin ideas para poner aqui", "¡¡¡Es que hace frio!!!", ];
let textoPerdiste;
let textRandomDeGanaste = ["Good Game", "Lo hiciste bien", ":)", "Felicidades, ve a tocar algo de pasto", "Hasta mi abuela hubiera podido", "omedeto, Shinji Kun", "No esperes unas felicitaciones", "Ya acaparaste la computadora mucho tiempo", "y el campeon del vicio es...", "Tus bullies estaban equibocados al no creer que llegarias lejos", "SIISIISIISIISIISIISIISIISIISIISIISIISIISII", "Game Over, ve a dormir", "Siempre confié en tí", "Al menos tienes algo que presumir", "Mamá, Papá, vieron eso?...mamá?....papá?","Good Game","Good Game","Good Game","Good Game","Good Game","Levantate, la habitacion ya huele mal"];
let textoGanaste;
let imagen1,imagen2, imagen3, imagen4, imagen5, imagen6, imagen7,imagen8,imagen9,palanca1, palanca2, palanca3, palanca4, palanca5
function preload (){
imagen1 = loadImage("assets/imagen1.png");
imagen2 = loadImage("assets/imagen2.png");
imagen3 = loadImage("assets/imagen3.png");
imagen4 = loadImage("assets/imagen4.png");
imagen5 = loadImage("assets/imagen5.png");
imagen6 = loadImage("assets/imagen6.png");
imagen7 = loadImage("assets/imagen7.png");
imagen8 = loadImage("assets/imagen8.png");
imagen9 = loadImage("assets/imagen9.png");
palanca1 = loadImage("assets/palanca1.jpg");
palanca2 = loadImage("assets/palanca2.jpg");
palanca3 = loadImage("assets/palanca3.jpg");
palanca4 = loadImage("assets/palanca4.jpg");
palanca5 = loadImage("assets/palanca5.jpg");
}

function setup() {
  createCanvas(1366, 622);
  //Variables declaradas
  //personaje
  posPersonajeX = width / 2;
  posPersonajeY = height -160;
  posYPrimerPiso = height -160
  posYSegundoPiso = height -320;
  posYTercerPiso = height - 480;
  //enemigo1
  x = width;
  yOpciones = [height -160, height -320, height - 480];
  y = random(yOpciones);
  velocidad = random(10, 30);
  textoPerdiste = random(textRandomDePerdiste);
  textoGanaste = random(textRandomDeGanaste);
  //enemigo2
  x2 = 0;
  y2 = random(yOpciones);
  velocidad2 = 5;
  //puntos
  xPuntos= width;
  yPuntos = random(yOpciones)
    velocidadPuntos= random(10, 20);
}

function draw() {
  background(220);
  switch (pantalla) {
  case 'inicio':
    // Pantalla de inicio
    image(imagen1,0,0,1366, 622);
    fill(0, 100);
    rect(606 , 303, 150,50);
    rect(520,370,327,50);
    rect(573,440,223,50);
    textAlign(CENTER);
    textSize(50);
    fill(200, 0, 0);
    text('play', width /2 ,height / 2 + 30);
    text('instrucciones', width /2 , height / 2 + 100);
    text('creditos', width /2 , height / 2 + 170);
    break;
  case 'instrucciones':
    background(220);
    image(imagen2,0,0,1366, 622);
    fill(0,100);
    rect (54,512,200,75);
    fill(225,0,0);
    text ('volver',153,565);
    break;
  case 'creditos':
  background(220);
    image(imagen9,0,0,1366, 622);
    fill(0,100);
    rect (54,512,200,75);
    fill(225,0,0);
    text ('volver',153,565);
    break;
  case 'juego':
    background(220);
    personajeSpeed = 10;
    // Dibujar el suelo
    fill (150);
    rect (0, posYTercerPiso, width, height);
    fill (100);
    rect (0, posYSegundoPiso, width, height);
    fill (50);
    rect (0, posYPrimerPiso, width, height);

    // Dibujar el personaje;
    fill(0, 0, 255,0);
    ellipse(posPersonajeX, posPersonajeY, 30, 30);
    image(imagen8,posPersonajeX-50,posPersonajeY-50,80,80);
    //valores de los movimientos en la X;
    if (adelante == true) { //avanzando
      posPersonajeX += personajeSpeed;
    }
    if (posPersonajeX < 320) {
      posPersonajeX = 315;
    }
    if (atras == true) { //volviendo
      posPersonajeX -= personajeSpeed;
    }
    if (posPersonajeX >width - 300) {
      posPersonajeX = width - 315;
    }
    //valores de los movimientos en la Y;
    if (posPersonajeY >posYPrimerPiso) {
      posPersonajeY = posYPrimerPiso;
    }
    if (posPersonajeY <posYTercerPiso) {
      posPersonajeY = posYTercerPiso;
    }

    // FUNCIONAMIENTO DE "GAME OVER"
    let distancia = dist(x, y, posPersonajeX, posPersonajeY);
    if (distancia < diametro / 2) {
      gameover = true;
    } else {
      gameover = false;
    }
    let distancia2 = dist(x2, y2, posPersonajeX, posPersonajeY);
    if (distancia2 < diametro2 / 2) {
      gameover2 = true;
    } else {
      gameover2 = false;
    }
    if (gameover) {
      pantalla = 'gameover';
    } else if (gameover2) {
      pantalla = 'gameover';
    }

    // Funcionamiento de los puntos anotados
    let distanciaPuntos = dist(xPuntos, yPuntos, posPersonajeX, posPersonajeY);
    if (distanciaPuntos < diametroPuntos / 2) {
      puntoAnotado = true;
    } else {
      puntoAnotado = false;
    }
    if (puntoAnotado) {
      cantidadPuntos += 1;
      xPuntos= width;
      yOpcionesPuntos = [height -160, height -320, height - 480];
      yPuntos = random(yOpcionesPuntos)
        velocidadPuntos= random(10, 20);
    }
    if (cantidadPuntos == 30) {
      pantalla = 'ganaste';
    }

    x -= velocidad;
    xPuntos-= velocidadPuntos;
    x2+= velocidad2;

    // Asegurarse de que el círculo aparezca en el otro lado cuando sale de la pantalla
    if (x < -diametro / 2) {
      x = width + diametro / 2;
      y = random(yOpciones);
      velocidad = random(10, 30);
    }
    if (xPuntos < -diametroPuntos / 2) {
      xPuntos = width + diametroPuntos / 2;
      yPuntos = random(yOpciones);
      velocidadPuntos = random(10, 20);
    }
    if (x2 > width) {
      x2 = 0
        y2 = random(yOpciones);
      velocidad2 = 5
    }

    // Dibujar el enemigo
    noStroke()
    fill (220, 0, 0,0);
    ellipse(x, y, diametro);
    image(imagen4,x-30, y-35,60,60);
    // Dibujar el enemigo 2
    noStroke()
    fill (100, 0, 200,0);
    ellipse(x2, y2, diametro2);
    image(imagen5,x2-80, y2-80,130,130);
    // Dibujar Puntos
    noStroke()
    fill (255, 255, 0,0);
    ellipse(xPuntos, yPuntos, diametroPuntos);
    image(imagen3,xPuntos-30, yPuntos-35,60,60);

    //Dibujar el limite de la pantalla (como en los arcades clasicos)
    fill (0);
    rect (0, 0, 290, 622);
    rect (width - 290, 0, width, height);
    fill (0, 0, 255);
    textAlign(CENTER);
    textSize(35);
    text('Puntaje:'+cantidadPuntos, 80, 30);
    image(palanca1,0,380,225,225);
    if (adelante == true){
    image(palanca4,0,380,225,225);
    }
    if (atras == true){
    image(palanca5,0,380,225,225);
    }
    if (arriba == true){
    image(palanca2,0,380,225,225);
    }
    if (abajo == true){
    image(palanca3,0,380,225,225);
    }
    if (x > 290) {
      fill (220, 0, 0,0);
      circle(width -260, y, 40);
      image(imagen6,width -280, y-35, 50,50);
    }
    if (x2 > 100) {
      fill (100, 0, 200,0);
      circle(260, y2, 40);
      image(imagen7,230, y2-35, 50,50);
    }
    break;

  case 'gameover':
    // Pantalla de gameover
    textAlign(CENTER);
    textSize(70);
    fill(200, 0, 0);
    text((textoPerdiste), width / 2, height / 2 - 40);
    textSize (50);
    text ('Tu puntaje: '+cantidadPuntos, width / 2 - 10, height / 2 + 80);
    break;
  case 'ganaste':
    textAlign(CENTER);
    textSize(40);
    fill(200, 0, 0);
    text((textoGanaste), width / 2, height / 2 - 40);
     text ('Tu puntaje: '+cantidadPuntos, width / 2 - 10, height / 2 + 80);
    textSize (50);
    break;
  }
}

function mousePressed() {// Cambiar de pantalla haciendo clic (empezar a jugar)
if ((pantalla == 'inicio') && mouseX> 520 && mouseX < 846 && mouseY > 369 && mouseY <419) {
    pantalla = 'instrucciones';
}
if ((pantalla == 'inicio') && mouseX> 573 && mouseX < 795 && mouseY > 440 && mouseY <490) {
    pantalla = 'creditos';
}
if ((pantalla == 'instrucciones') && mouseX> 53 && mouseX < 253 && mouseY > 512 && mouseY <586) {
    pantalla = 'inicio';
}
if ((pantalla == 'creditos') && mouseX> 53 && mouseX < 253 && mouseY > 512 && mouseY <586) {
    pantalla = 'inicio';
}
  if ((pantalla == 'inicio') && mouseX> 606 && mouseX < 756 && mouseY > 303 && mouseY <352) {
    pantalla = 'juego';
    cantidadPuntos = 0;
    posPersonajeX = width / 2;
    posPersonajeY = height -160;
    x = width + diametro / 2;
    y = random(yOpciones);
    x2 = 0;
    y2 =random(yOpciones);
    xPuntos = width + diametroPuntos / 2;
    yPuntos = random(yOpciones);
    textoPerdiste = random(textRandomDePerdiste);
    textoGanaste = random(textRandomDeGanaste);
    disparo = false;
  }
  if (pantalla === 'gameover') {
    pantalla = 'inicio';
  }
  if (pantalla === 'ganaste') {
    pantalla = 'inicio';
  }
}

function keyPressed() {
  if (key == 'w'|| key == 'W') {
    arriba = true;
  }
  if (arriba == true) { //salto
    posPersonajeY -= 160;
  }
  if (key == 's'|| key == 'S') {
    abajo = true;
  }
  if (abajo == true) { //bajado
    posPersonajeY += 160;
  }
  if (key == 'd'|| key == 'D') {
    adelante = true;
  }
  if (key == 'a'|| key == 'A') {
    atras = true;
  }
}

function keyReleased() {
  if (key == 'm') {
    cantidadPuntos = 30;
  }
  if (key == 'w'|| key == 'W') {
    arriba = false;
  }
  if (key == 's'|| key == 'S') {
    abajo = false;
  }
  if (key == 'd'|| key == 'D') {
    adelante = false;
  }
  if (key == 'a'|| key == 'A') {
    atras = false;
  }
}
