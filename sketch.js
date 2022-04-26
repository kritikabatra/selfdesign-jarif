
var bg ,bgimg, boy, boyimg
var ghostGroup,ghost,ghostimg
var invisibleGround
var candy,candyimg; 
var pumpkinGroup,pumpkin,pumpkinimg1,pumpkinimg2,pumpkinimg3;

var zombie,zombiemg
var score = 0;
var go, goImg;
var zombie_stand, boystand;
function preload(){ // load images, animations and sound files
  bgimg = loadImage("Halloween.jpg");

  boyimg = loadAnimation("Boy 1.png","Boy 2.png","Boy 3.png","Boy 4.png","Boy 5.png", "Boy 6.png");

  ghostimg = loadAnimation("ghost1.png","ghost2.png","ghost3.png")

  candyimg = loadImage("candy.png");

  zombieimg = loadAnimation("zombie1.png","zombie2.png","zombie3.png");

  pumpkinimg1 = loadImage("pumpkin1.png");
  pumpkinimg2 = loadImage("pumpkin2.png");
  pumpkinimg3 = loadImage("pumpkin3.png");

  goImg= loadImage ("gameOver.png");
  zombie_stand = loadAnimation("zombie1.png")
  boystand = loadAnimation("Boy 2.png")
}

function setup(){ 
  createCanvas(1000,400)

  bg = createSprite(400,200,800,400)
  bg.addImage(bgimg)
  bg.scale = 1.38
  bg.velocityX = -5
  bg.x=bg.width/2

  
  //create a trex sprite
  boy = createSprite(200,350,40,80);
  boy.addAnimation("running", boyimg);
  boy.addAnimation("standing",boystand);
  boy.scale = 0.2;
  boy.changeAnimation("running", boyimg);

  boy.setCollider("circle",0,0,170);
  //boy.debug = true


  invisibleGround = createSprite(400,390,800,10);
  invisibleGround.visible = false;

  zombie = createSprite(30,300,40,80)
  zombie.addAnimation("chasing",zombieimg);
  zombie.addAnimation("stand",zombie_stand);
  zombie.changeAnimation("chasing",zombieimg);
  zombie.scale = 1.4;
  zombie.debug=true
  zombie.setCollider("rectangle",0,0,40,90);

  go = createSprite (width/2,height/2);
  go.addImage(goImg);
  go.visible=false;
 
  ghostGroup = createGroup();
  pumpkinGroup = createGroup();
  candyGroup = createGroup();
}

function draw(){
  background("black")
  spawnGhost();
  spawnCandy();
  spawnPumpkin();
  drawSprites();
 
  console.log(zombie.x)
  if (bg.x < 315){
    bg.x = bg.width/2;
  }

  if(keyDown("space")&& boy.y >= 290) {
    boy.velocityY = -12;
  }

  //add gravity
  boy.velocityY = boy.velocityY + 0.8
  boy.collide(invisibleGround)

  if(ghostGroup.isTouching(boy)){
    zombie.x=zombie.x+10;
    ghostGroup.destroyEach();
  }
  if(pumpkinGroup.isTouching(boy)){
    zombie.x=zombie.x+10;
    pumpkinGroup.destroyEach();
  }
  if(candyGroup.isTouching(boy)){
    zombie.x=30
    candyGroup.destroyEach();
  }
  if(zombie.isTouching(boy)){
    bg.velocityX=0;
    candyGroup.setVelocityEach(0);
    ghostGroup.setVelocityEach(0);
    pumpkinGroup.setVelocityEach(0);
    go.visible=true;
    zombie.changeAnimation("stand",zombie_stand);
    boy.changeAnimation("standing",boystand);
  }
}
function spawnGhost(){
  if (frameCount % 300 === 0) {
    ghost = createSprite(790,350,40,10);
    ghost.addAnimation("greenghost",ghostimg);
    ghost.scale = 0.7;
    ghost.velocityX = -3;
    
    ghost.lifetime = 450;
    ghostGroup.add(ghost)
    }
  }

function spawnCandy(){
  if (frameCount % 180 === 0) {
    candy = createSprite(1100,200,40,10);
    candy.addAnimation("candy",candyimg);
    candy.scale = 0.3;
    candy.velocityX = -3;
   // candy.y = Math.round((random(100,280)))
    candy.lifetime = 450;
    candyGroup.add(candy)
  }
}
  function spawnPumpkin(){
    if (frameCount % 200 === 0) {
      pumpkin = createSprite(1100,350,40,10)
      pumpkin.velocityX = -6;
     // pumpkin.x = Math.round(random(100,900))
      var rand = Math.round(random(1,3));
      switch(rand){
         case 1:pumpkin.addImage(pumpkinimg1);
         break;
         case 2:pumpkin.addImage(pumpkinimg2);
         break;
         case 3:pumpkin.addImage(pumpkinimg3);
         break;
         default:break;

      }
      pumpkin.scale = 0.3
      pumpkinGroup.add(pumpkin)
    }
  }
 
  
 




































































































































































































































































































































































































































































































































































































































































































































































































































































































