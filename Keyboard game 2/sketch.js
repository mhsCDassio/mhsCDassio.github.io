//Global Variables
let wallpaper;

let x1 = 100;
let y1 = 100;
let x2 = 400;
let y2 = 700;

let speedX = 3;
let speedY = 3;

let hit = false

function preload(){
  wallpaper = loadImage('Background.png');
}

function setup() {
  // put setup code here
  createCanvas(1280,800)
}

function draw() {
  image(wallpaper,0,0);
  fill(230);
  ellipse(x1,y1,30,30);
  x1+=speedX;
  y1+=speedY;
  if (y1-15<=0){
    speedY=speedY*(-1);
  }
  if (x1+15>=width || x1-15<=0){
    speedX=speedX*(-1);
  }

  fill(230)
  noStroke()
  rect(x2,y2,200,20)
  if (keyIsDown(LEFT_ARROW)){
    x2 -= 10
  }
  if (keyIsDown(RIGHT_ARROW)){
    x2 += 10
  }
  hit = collideRectCircle(x2,y2,200,20,x1,y1,30);
  if (hit){
    speedY+=0.5
    speedX+=0.5
    speedY=speedY*(-1);
  }
  if (y1>=height){
    background(255,0,0)
    textSize(60)
    fill(255)
    text('YOU FAIL',width/5*2-20,height/2)
    textSize(30)
    fill(255)
    text('to continue press space bar',width/3+10,height/2 + 50)
  }
  if (keyIsDown(32)){
    x1=100
    y1=100
    x2=400
    y2=700
    speedX=3
    speedY=3
  }
}
