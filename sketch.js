
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(500,500,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(1000,400,50,50);
  gameObject2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching( movingRect,gameObject1)){

    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  
  else if (isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
  
    gameObject2.shapeColor = "blue";
  }

  else {

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching( movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    
     
    return true;
  }
  else {
    return false;
  } 
}


