var hr = hour();
var mn = minute();
var sec = second();
var scAngle;


function setup() {
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255, 255, 255);
  angleMode(DEGREES);
  scAngle = map(sec,0,60,0360);

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(this.body.position.x, this.body.position.y);

  
  
  drawSprites();
}
