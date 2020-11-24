
var car,wall;
var s,w ,th;
function setup() {
  createCanvas(1600,400);
s=random(223,321)
w=random(30,52)
th=random(22,83)
b=  createSprite(50, 200, 50, 50);
b.velocityX=s;
b.shapeColor=(225)

wall= createSprite(1500, 200, th,height/2);
wall.shapeColor= color (80,80,80)
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<(car.width+wall.width)/2) {
car.velocityX= 0;
var deform=0.5*w*s*s/22509;
if(deform<180 && deform>100){
  car.shapeColor=color(230,230,0)
}


if(deform<180 ){
  car.shapeColor=color(250,0,0)
} 


if(deform<100 ){
  car.shapeColor=color(0,255,0)
}
  }
  drawSprites();
}