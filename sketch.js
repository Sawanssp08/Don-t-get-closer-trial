var level;
var boy,boyimg;

var hall,hallimg;
var bedroom,bedroomimg;
var kitchen,kitchenimg;
var computeroom,computeroomimg;
var ups,upsimg;
var fruitbasket,fruitbasketimg;
var cushin,cushinimg,cushin2,cushin3;
var gameState=0;
var levelbg;

//variables for the dog
var dogs,dogRightImg,dogleftImg;

function preload(){

boyimg=loadAnimation("images/by1.png","images/by2.png","images/by3.png")

dogRightImg=loadAnimation("images/d4.png","images/d5.png")
//dogLeftImg=loadAnimation("images/d44.png","images/d55.png");
hallimg=loadImage("images/hall.jpg");
cushinimg=loadImage("images/cushin1.png");

}


function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight-100);

  levelbg=createSprite((displayWidth-100)/2,(displayHeight-100)/2,10,10);

boy=createSprite(250,400,10,10);
boy.addAnimation("boy",boyimg);
boy.scale=0.4;

dogs=createSprite(50,400,10,10);
dogs.velocityX=6;
dogs.addAnimation("dog",dogRightImg);
dogs.scale=0.4;

hallSetup();

}


function draw(){
  drawSprites()
if (gameState===0){
  hallPlay();

}
else
if (gameState===-1){
  fill("black");
  textSize(25);
  text("Try Again",700,280);
}
 
}
