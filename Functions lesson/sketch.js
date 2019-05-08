/*
Functions lesson
Created by Clara
*/

//Global variables
//let x = 100;

function setup() {
  createCanvas(800,600);
  background(127);
}

function draw() {
  /*
  fill(0,255,0);
  rect(x, 100,200,200);
  x=x+5;
  fill(255,0,0);
  ellipse(300,300,100,100);
  */
  //Draw target in top left corner
  let x = width/4;
  let y = height/4;
  drawTarget(x,y);

  //Draw target in top right corner
  x = 3*width/4;
  drawTarget(x,y);

  //Draw target in bottom right corner
  y = 3*height/4;
  drawTarget(x,y);

  //Draw target in bottom left corner
  x = width/4;
  drawTarget(x,y);

  //Draw target in the centre
  drawTarget(width/2, height/2);
}

function drawTarget(newX,newY) {
  fill(0);
  ellipse(newX,newY,200,200);
  fill(255);
  ellipse(newX,newY,100,100);
  fill(0);
  ellipse(newX,newY,50,50);
  fill(255);
  ellipse(newX,newY,25,25);

}
