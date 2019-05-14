//Global Variables
let x1 = 700
let y1 = 600
let x2 = 100
let y2 = 100

let size = 30

let hit = false

function setup() {
  createCanvas(800,700)
}

function draw() {
  background(240)
  hit = collideCircleCircle(x1,y1,size,x2,y2,size)
  fill(66, 244, 200)
  //ellipse that can be moved with the arrows
  ellipse(x1,y1,size,size)

  if (keyIsDown(LEFT_ARROW)){
    x1 -= 5
  }
  if (keyIsDown(RIGHT_ARROW)){
    x1 += 5
  }
  if (keyIsDown(UP_ARROW)){
    y1 -= 5
  }
  if (keyIsDown(DOWN_ARROW)){
    y1 += 5
  }
  //if the ellipse leaves the canvas it will re-appear on the opposite side
  if (x1===0){
    x1 = 800
  }
  else if (x1===800){
    x1 = 0
  }
  if (y1===0){
    y1 = 700
  }
  else if (y1===700){
    y1 = 0
  }

  //second ellipse that can be moved with A,S,W,D
  fill(125, 66, 244)
  ellipse(x2,y2,size,size)

  if (keyIsDown(65)){
    x2 -= 5
  }
  if (keyIsDown(68)){
    x2 += 5
  }
  if (keyIsDown(87)){
    y2 -= 5
  }
  if (keyIsDown(83)){
    y2 += 5
  }
  if (x2===0){
    x2 = 800
  }
  else if (x2===800){
    x2=0
  }
  if (y2===0){
    y2 = 800
  }
  else if (y2===800){
    y2 = 0
  }
  //if the ellipses meet a fail screen will show and let the players reset the place of the ellipses
  if (hit){
    background(0)
    textSize(60)
    fill(255,0,0)
    text('YOU FAIL',width/3,height/2)
    textSize(30)
    fill(255)
    text('to continue press space bar',width/4+10,height/2 + 50)
  }
  if (keyIsDown(32)){
    x1=700
    y1=600
    x2=100
    y2=100
  }
}
