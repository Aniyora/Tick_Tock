var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  translate(100,100);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle=map(sc, 0, 60, 0, 360);
  mnAngle=map(mn, 0, 60, 0, 360);
  hrAngle=map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(6);
  fill("green");
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(10);
  fill("blue");
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(8);
  fill("red");
  line(0,0,100,0);
  pop();
  

  drawSprites();
}