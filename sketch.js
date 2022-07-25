var car1, car1Img;
var car2, car2Img, car2G;
var rua, ruaImg;
var gameOver,gOverImg

var PLAY=1;
var END=0;
var gameState=1;



// eu estou com problemas para exibir a imagem game over 





function preload(){

car1Img = loadImage("car1.png");
car2Img = loadImage("car2.png");
ruaImg = loadImage("Road.png");
gOverImg = loadImage("game_over.png");



}

function setup() {
 createCanvas(400,600);

 rua = createSprite(200,300);
 rua.addImage(ruaImg);
 rua.scale = 0.20;
 rua.velocityY = 7;

 car1 = createSprite(200,500,20,20);
 car1.addImage(car1Img);
 car1.scale = 0.5;

 car2G = new Group();
 
 edges = createEdgeSprites();

}

function draw() {

 background("blue");

 if(gameState===PLAY){
  car1.x = World.mouseX;

  if (rua.y > 400 ){
    rua.y = height/2;

  }

  createObtacle();

  drawSprites();

  if(car2G.isTouching(car1)){
    car1.destroy();
    gameState = END;

      gameOver = createSprite(180,280,20,20);
      gameOver.addImage("gameover",gOverImg);
      gameOver.scale=0.7
  }
 }
 
 

 

  
}



function createObtacle() {
  if (World.frameCount % 35 == 0) {
  var car2 = createSprite(Math.round(random(50, 350),40, 10, 10));
  car2.addImage(car2Img);
  car2.scale=0.25;
  car2.velocityY = 20;
  car2.lifetime = 200;
  car2G.add(car2);
  }
}