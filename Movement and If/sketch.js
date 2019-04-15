//Global Variables
let x = 100;
let y = 100;

let xSpeed = 4;
let ySpeed = 4;

let size = 100;

function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  //Change the background
  background(240);

//Draw the rectangle
  fill(39, 59, 119);
  rect(x,y,size,size);
  //Move the rectangle
  //Both ways work the exact same way, only the writing differs, chose one, don't mix
  //x += xSpeed;
  y = y + ySpeed;
//If ot reaches the bottom or top, changes the direction
          //For if y is equal to height use === not =, = will change the y value

  if (y+size>=height) {
    y = height-size;
    ySpeed = ySpeed*(-1);
  }

  else if (y<0) {
    y=0;
    ySpeed = ySpeed*(-1);
  }
//If it reaches the right or left, changes direction
  if (x+size>=width || x<=0){
    xSpeed = xSpeed*(-1);
  }
          // ELSE if makes it easier for the computer, the program stays the same
          // || means OR and is a logical operator

  ySpeed=ySpeed+1;


}
