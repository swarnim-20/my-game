var road,roadImage;
 var player1,player2;
 var player1Img,player2Img;
  
 function preload(){
  roadImage = loadImage("road.png");
  player1Img = loadImage("player1.png");
  player2Img = loadImage("player2.png");
 }

 function setup(){
  createCanvas(600,200)
  road = createSprite(300,100,600,200);
  road.addImage(roadImage);
  player1.addImage(player1Img);
  player2.addImage(player2Img);
 }