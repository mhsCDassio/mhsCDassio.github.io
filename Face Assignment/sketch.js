/*
ICS2O Face Assignment
Created By: Noah, Jonah, Nathan, Clara
Created on March 25, 2019
*/

//Global variable size Information
let eyeSize = 40;
let faceWidth = 450;
let faceHeight = 375;
let scale = 1;
let x1 = 315;
let x2 = 495;
let x3 = 125;
let x4 = 300;
let y1 = 200;
let y2 = 325;
let y3 = 420
let arcWidth = 250;
let arcHeight = 50;
let tripoint = 178;

//Canvas
function setup(){
  createCanvas(810,900);
  background(255);
}

//Start Program
function draw(){
  //Clara's Code
  let x = 2*width/5 + 80;
  let y = 2*height/5 + 100;
  rotate(PI/20);
  drawArms(x,y);
  rotate(-PI/20);
  x = 3*width/5 - 90;
  y = 3*height/5 + 50;
  rotate(-PI/20);
  drawArms(x,y);
  rotate(PI/20);
  //Clara's Code end
  
  drawFace();
  x = width/3
  y = height/3
  drawEyes(x,y);
  x = 2*width/3;
  drawEyes(x,y);

  drawLegs();
  drawBody();
  drawMouth();
  drawHair(x,y);
  drawHair2(x,y);
}
//Arms (Clara)
function drawArms(x,y){
  fill(254,209,190);
  strokeWeight(8);
  ellipse(x,y,eyeSize,2*faceHeight/3);
}

//Legs Jonah :)
function drawLegs(){
  strokeWeight(15);
//fill(0);

//legs for ButterCup
quad(width/2-60, height/2+200, width/2-10, height/2+200, width/2-10, height/2+305, width/2-60, height/2+305);
quad(width/2-70+80, height/2+200, width/2-20+80, height/2+200, width/2-20+80, height/2+305, width/2-70+80, height/2+305);
strokeWeight(10);
//line(width/2-70, height/2+305, width/2-10, height/2+305);
//line(width/2-70+80, height/2+305, width/2-10+80,height/2+305);

//left foot
strokeWeight(2);
fill(0);
arc(width/2-35, height/2+313,63, 75, 0, PI, OPEN);
fill(255,255,255);
arc(width/2-35, height/2+313,40, 30, 0, PI, OPEN);
//right foot
strokeWeight(2);
fill(0);
arc(width/2+35, height/2+313,63, 75, 0, PI, OPEN);
fill(255,255,255);
arc(width/2+35, height/2+313,40, 30, 0, PI, OPEN);
}

//Body Jonah :)
function drawBody(){
  strokeWeight(16);
  fill(0);
  quad(width/2-50, height/2, width/2+50, height/2, width/2+70, height/2+200, width/2-70, height/2+200);
  fill(127,255,0);
  quad(width/2-50, height/2, width/2+50, height/2, width/2+70, height/2+200, width/2-70, height/2+200);
  fill(0);
  rect(width/2-50, height/2+50, 100, 60);
}

//Face (Noah)
function drawFace() {
  fill (254,209,190);
  strokeWeight(10*scale);
  smooth();
  ellipse (width/2*scale, height/3.5*scale, faceWidth*scale, faceHeight*scale);
}

//Eyes (Nathan)
function drawEyes(newX,newY) {
  fill(255)
  strokeWeight(0);
  ellipse(newX,newY,200,200);
  fill(89,180,23)
  ellipse(newX,newY,175,175);
  fill(0);
  ellipse(newX, newY,100,100);
  fill(255);
  ellipse(newX, newY,50,50);
}
//Mouth(Nathan)
function drawMouth() {
  noFill();
  strokeWeight(4);
  arc(width/2,height/2.5,arcWidth/5,arcHeight+30,0,PI);
}

//Hair (Noah)
function drawHair(newX,newY) {
  stroke(0);
  strokeWeight(10);
  //makes shape of buttercup's hair
  noFill();
  beginShape();
  arc(x1,y1,arcWidth,arcHeight,PI,PI*1.65,OPEN);
  arc(x2,y1,arcWidth,arcHeight,PI*1.11,PI*2,OPEN);
  line(x1+60,tripoint,width/2,y1-70);
  line(x2-60,tripoint,width/2,y1-70);
  arc(width/2,height/3.5,faceWidth,faceHeight,PI*1.1,PI*1.88,OPEN);
  endShape(CLOSE);
}
//second part of hair, near bottom of ellipse
function drawHair2(newX,newY) {
  beginShape();
  arc(arcWidth/2,y1,arcHeight+80,arcWidth,0,PI/2,OPEN);
  line(x3,y2,x4,y3);
  //no mirror function in p5, so this part is approximately mirrored
  arc(arcWidth*2.74,y1,arcHeight+80,arcWidth,PI/2,-PI,OPEN);
  line(x3+560,y2,x4+210,y3);
  endShape(CLOSE);
  noFill();
  ellipse (width/2,height/3.5,faceWidth,faceHeight);
}
