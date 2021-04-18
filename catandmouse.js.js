var back,backImage;
var cat, catImage1,catImage2,catImage3;
var mouse,mouseImage1,mouseImage2,mouseImage3;

function preload() {
    //load the images here
    backImage=loadImage("images/garden.png");
    catImage1=loadAnimation("images/cat1.png");
    mouseImage1=loadAnimation("images/mouse1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImage3=loadAnimation("images/cat4.png");
    mouseImage3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //jerry
    mouse=createSprite(250,720,50,50);
    mouse.addAnimation("mouse",mouseImage1);
    mouse.scale=0.1;
    //tom
    cat=createSprite(850,700,50,50);
    cat.addAnimation("cat",catImage1);
    cat.scale=0.2;

}

function draw() {

    background(backImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.collide(mouse)){
        cat.velocityX=0;
        cat.addAnimation("catHappy",catImage3);
        cat.changeAnimation("catHappy");

        mouse.addAnimation("mouseInvestigating",mouseImage3);
        mouse.changeAnimation("mouseInvestigating");
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
      mouse.addAnimation("mouseTeasing",mouseImage2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;

      cat.addAnimation("catMoving",catImage2);
      cat.changeAnimation("catMoving");
      cat.velocityX=-2;
  }


}
