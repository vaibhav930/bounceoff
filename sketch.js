var fixrect;
var moverect;

function setup() {
  createCanvas(800,400);
  fixrect = createSprite(100,200,50,20);
  fixrect.velocityX=2;
  fixrect.shapeColor="purple";
  moverect= createSprite(600,200,20,50);
  moverect.velocityX=-2;
  moverect.shapeColor="purple";
}

function draw() {
  background(255,255,255);  
  
  //moverect.x=mouseX;
 // moverect.y=mouseY;
  
  bounceOff(fixrect,moverect);
  drawSprites();
}
