/*
Snowman Assignment
Created by Clara
March 18, 2019
*/

function setup() {
  createCanvas(400,400);
}

function draw() {
  //Create the ground
  rect(0,350,400,50);

  //Create the Snowman body
  ellipse(200,300,150,150);
  ellipse(200,200,100,100);
  ellipse(200,120,75,75);

  //Create Arms
  line(160,200,100,100);
  line(240,200,300,100);
}
