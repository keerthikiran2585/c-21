var fixedRect,movingRect;
var obj1,obj2,obj3,obj4;


function setup() {
  createCanvas(800,400);





 fixedRect= createSprite(400, 100, 50, 80);
 movingRect= createSprite(400, 300 , 80, 30);
fixedRect.shapeColor="blue";
movingRect.shapeColor="blue";

obj1=createSprite(100, 100, 50, 50);
obj1.shapeColor="green";
obj2=createSprite(200, 100, 50, 50);
obj2.shapeColor="green";
obj3=createSprite(300, 100, 50, 50);
obj3.shapeColor="green";
obj4=createSprite(400, 100, 50, 50);
obj4.shapeColor="green";
movingRect.velocityY=-5;
fixedRect.velocityY=+5;

}

function draw() {
  background(255,255,255); 
  

 // movingRect.x=World.mouseX;
//movingRect.y=World.mouseY;


 

bounceOff(movingRect, fixedRect);

  drawSprites();
}

