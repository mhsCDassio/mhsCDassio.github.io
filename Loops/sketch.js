/*
Loops Assignment
Created by Clara
April 29, 2019
*/

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(240);
  noStroke();
  let y = 255;
  let x = 0;
//draws differently coloured bars from top to bottom of the canvas, the colour being a darker blue every time you go downwards
  for(x=0; x<=height; x+=50){
    y-=20;
    fill(0,y,200);
    rect(0,x,800,50);
  }
}
