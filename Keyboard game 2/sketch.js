/*
Keyboard game 2/Sounds and images
Created by Clara
April 25, 2019
*/

//Global Variables
let wallpaper;

let x1 = 100;
let y1 = 100;
let x2 = 400;
let y2 = 700;

let speedX = 3;
let speedY = 3;

let hit = false;

function preload(){
  wallpaper = loadImage('Background.png');
}

function setup() {
  createCanvas(1280,800);
}

function draw() {
  image(wallpaper,0,0);
  fill(18, 56, 206);
  //ellipse will move over the screen and cannt colide with the botom of the canvas(referr to if(hit)), if it hits any other side it will change it's direction
  ellipse(x1,y1,30,30);
  x1+=speedX;
  y1+=speedY;
  if (y1-15<=0){
    speedY=speedY*(-1);
  }
  if (x1+15>=width || x1-15<=0){
    speedX=speedX*(-1);
  }

  fill(18, 56, 206);
  noStroke();
  //small rectangle than can be moved to keep the ellipse from hitting the botom of the canvas, when ellipse hits the rectangle it will change y direction
  rect(x2,y2,200,20);
  if (keyIsDown(LEFT_ARROW)){
    x2 -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)){
    x2 += 10;
  }
  hit = collideRectCircle(x2,y2,200,20,x1,y1,30);
  if (hit){
    speedY+=random(0,1);
    speedX+=random(0,1);
    speedY=speedY*(-1);;
  }
  if (y1>=height){
    background(255,0,0);
    textSize(60);
    fill(255);
    text('YOU FAIL',width/5*2-20,height/2);
    textSize(30);
    fill(255);
    text('to continue press space bar',width/3+10,height/2 + 50);
  }
  if (keyIsDown(32)){
    x1=100;
    y1=100;
    x2=400;
    y2=700;
    speedX=3;
    speedY=3;
  }
}
