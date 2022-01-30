var movingRect;
var object1;
var object2;
var object3; 
var object4;

function preload(){
  music = loadSound("music.mp3");
}
function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 300, 25,25);
 movingRect.shapeColor="black";
 object1 = createSprite(100,300,66,66);
 object1.shapeColor="blue";
 object2 = createSprite(200,300,66,66);
 object2.shapeColor="orange";
 object3 = createSprite(300,300,66,66);
 object3.shapeColor="purple";
 object4 = createSprite(400,300,66,66);
 object4.shapeColor="lime";
}

function draw() {
  background("white");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


if(isTouching(object1,movingRect)){
  //object1.shapeColor="blue";
  movingRect.shapeColor="blue";
  movingRect.velocityX= 0;
  music.play();
}
 // else{
 // object1.shapeColor="blue";
 // movingRect.shapeColor="black";
 // music.stop();
 //
//}
if(isTouching(object2,movingRect)){
   //object2.shapeColor="orange";
   movingRect.shapeColor="orange";
   movingRect.velocityX= 0;
   music.play();
}
// else{
  //  object2.shapeColor="orange";
    //movingRect.shapecolor="black";
    //music.stop();
//}

if(isTouching(object3,movingRect)){
  //object3.shapeColor="purple";
  movingRect.shapeColor="purple";
  movingRect.velocityX= 0;
  music.play();
}
//else{
// object3.shapeColor="purple";
// movingRect.shapeColor="black";
// music.stop();
// }
if(isTouching(object4,movingRect)){
object4.shapeColor="lime";
movingRect.shapeColor="lime";
 movingRect.velocityX= 0;
 music.play();
}
//else{
//object4.shapeColor="lime";
//movingRect.shapeColor="black";
//music.stop();
// }
  
 movingRect.collide(object1);
    movingRect.collide(object2);
    movingRect.collide(object3);
    movingRect.collide(object4);


    
    


  drawSprites();
}
