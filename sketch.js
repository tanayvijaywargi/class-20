var movingRect,fixedRect;





function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 50, 50); 
  movingRect.shapeColor="green"; 
  fixedRect=createSprite(470,200,60,70); 
  movingRect.shapeColor="green"; 
}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<movingRcect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<movingRcect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2&&
  fixedRect.y-movingRect.y<movingRcect.width/2+fixedRect.width/2){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"




}
else{
  movingRect.shapeColor="green";  
  movingRect.shapeColor="green"; 
}

  drawSprites();
}