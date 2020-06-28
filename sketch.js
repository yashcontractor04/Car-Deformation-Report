var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  //createSprite(400, 200, 50, 50);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(0);  
  if(wall.x - car.x === wall.width/2 + car.width/2) {
    car.velocityX = 0;
    if((0.5*weight*speed*speed)/22500 <= 100) {
      car.shapeColor = (0,255,0);
    }
    if((0.5*weight*speed*speed)/22500 > 100 && (0.5*weight*speed*speed)/22500 < 180) {
      car.shapeColor = (230, 230, 0);
    }
    if((0.5*weight*speed*speed)/22500 >= 180) {
      car.shapeColor = (255,0,0);
    }
  }
  drawSprites();
}