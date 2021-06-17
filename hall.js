
function hallSetup(){
   

    levelbg.addImage(hallimg);
    levelbg.scale=2;

cushin=createSprite(1080,380,10,10);
cushin.addImage(cushinimg);
cushin.scale=0.3;

cushin2=createSprite(190,380,10,10);
cushin2.addImage(cushinimg);
cushin2.scale=0.25;

cushin3=createSprite(1150,380,10,10);
cushin3.addImage(cushinimg);
cushin3.scale=0.3;
}

function hallPlay(){
    if(keyDown("right") && boy.x < 1400) {
        boy.x = boy.x + 10;
      }

      if(boy.isTouching(dogs)){
        boy.velocityX=0;
        boy.velocityY=0;
        dog.velocityX=0;
        dog.velocityY=0;

       

        gameState===-1;
      }
      
    /*
      if(keyDown("left") && boy.x > 50) {
        boy.x = boy.x - 10;
        
      }
    */
      
}