var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(300,150,40,80);
  gameObject1.shapeColor = "orange";
  gameObject1.debug=true;
  gameObject2 = createSprite(350,200,60,90);
  gameObject2.shapeColor = "purple";
  gameObject2.debug=true;
  gameObject3 = createSprite(850,100,30,40);
  gameObject3.shapeColor = "red";
  gameObject3.debug=true;
  gameObject3.velocityY=5;
  gameObject4 = createSprite(850,600,30,70);
  gameObject4.shapeColor = "white";
  gameObject4.debug=true;
  gameObject4.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
    else {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }
  
  bounceOff(gameObject3,gameObject4);
  drawSprites();
}



