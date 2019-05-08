/*
House Assignment
Created by Clara
March 20, 2019
*/

function setup() {
  //Create the canvas
  createCanvas(800,600);
  background(163,255,250);
}

function draw() {
  //set the width of the house
  //change this variable to scale the house
  let houseWidth = 100;

  //Main Part of the House
  fill(200,200,200);
  rect(width/3, height/2, houseWidth, houseWidth/2);

  //Roof
  fill(255,0,0);
  triangle(width/3, height/2,width/3 + houseWidth/2, height/2 - houseWidth/2,width/3 + houseWidth, height/2);

  //Door
  fill(255,255,255);
  rect(width/3 + houseWidth/2 - houseWidth/17,height/2 + houseWidth/4,houseWidth/8,houseWidth/4);
  fill(0);
  ellipse(width/3 + houseWidth/2 + houseWidth/20, height/2 + houseWidth/3 + houseWidth/20,houseWidth/99,houseWidth/99);

  //Left window
  fill(255,255,255);
  rect(width/3 + houseWidth/7,height/2 + houseWidth/7, houseWidth/5 , houseWidth/5);
  //Right window
  rect(width/3 + houseWidth/2 + houseWidth/6, height/2 + houseWidth/7,houseWidth/5, houseWidth/5);
}
