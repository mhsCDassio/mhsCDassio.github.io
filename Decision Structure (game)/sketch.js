let x = 640
let y = 400
let x1 = 300
let x2 = 800
let y1 = 0
let y2 = 300

let ySpeed1 = 5
let ySpeed2 = 5
let xSpeed1 = 5
let xSpeed2 = 5

let hit1 = false
let hit2 = false

let level = 0

function setup() {
  createCanvas(1280,800)
}

function draw() {
//------------------Instructions------------------//
  if (level === 0){
    background(0)
    fill(255)
    textAlign(CENTER,CENTER)
    textSize(40)
    text('ESCAPE ROOM',width/2,height/2)

    textSize(25)
    text('You are being held prisoner in this room. \nTo escape you have to move off the screen',width/2,height/2+70)
    text('Press enter to start playing', width/2, height/2+150)

    if (keyIsDown(ENTER)){
      level+=1
    }
  }
//------------------Level 1/Training------------------//
  if (level === 1){
    background(240)
    fill(0,255,0)
    ellipse(x,y,50,50)
    if (keyIsDown(LEFT_ARROW)){
      x -= 5
    }
    if (keyIsDown(RIGHT_ARROW)){
      x += 5
    }
    if (keyIsDown(UP_ARROW)){
      y -= 5
    }
    if (keyIsDown(DOWN_ARROW)){
      y += 5
    }

    if (x>width || x<0 || y>height || y<0){
      x=640
      y=400
      level+=1
    }
  }

//------------------Level 2------------------//
  else if (level === 2){
    background(240)
    fill(0,255,0)
    ellipse(x,y,50,50)

    if (keyIsDown(LEFT_ARROW)){
      x -= 5
    }
    if (keyIsDown(RIGHT_ARROW)){
      x += 5
    }
    if (keyIsDown(UP_ARROW)){
      y -= 5
    }
    if (keyIsDown(DOWN_ARROW)){
      y += 5
    }

    fill(0)
    y1+=ySpeed1
    x1+=xSpeed1
    rect(x1,y1,100,100)
    if (x1+100>=width || x1<=0){
      xSpeed1 = xSpeed1*(-1)
    }
    if (y1+100>=height || y1<=0){
      ySpeed1 = ySpeed1*(-1)
    }

    if (x>width || x<0 || y>height || y<0){
      level+=1
      x=640
      y=400
    }
  }
//------------------Level 3------------------//
  else if (level === 3){
    background(240)
    fill(0,255,0)
    ellipse(x,y,50,50)
    if (keyIsDown(LEFT_ARROW)){
      x -= 5
    }
    if (keyIsDown(RIGHT_ARROW)){
      x += 5
    }
    if (keyIsDown(UP_ARROW)){
      y -= 5
    }
    if (keyIsDown(DOWN_ARROW)){
      y += 5
    }

    fill(0)
    y1+=ySpeed1
    y2+=ySpeed2
    x1+=xSpeed1
    x2+=xSpeed2

    rect(x1,y1,100,100)
    rect(x2,y2,100,100)

    if (y1+100>=800 || y1<=0){
      ySpeed1 = ySpeed1*(-1)
    }
    if (x1+100>=1280 || x1<=0){
      xSpeed1 = xSpeed1*(-1)
    }
    if (y2+100>=800 || y2<=0){
      ySpeed2 = ySpeed2*(-1)
    }
    if (x2+100>=1280 || x2<=0){
      xSpeed2 = xSpeed2*(-1)
    }

    if (x>width || x<0 || y>height || y<0){
      level+=1
    }
  }
//------------------Level 4/You win------------------//
  else if (level === 4){
    background(0,255,0)
    fill(255)
    textAlign(CENTER, CENTER);
    textSize(32);
    text('YOU WIN!', width/2, height/2);
    textSize(16);
    text('Press enter to play again', width/2, height/2+50);

    if (keyIsDown(ENTER)) {
      x=width/2;
      y=height/2;
      level=2;
    }
  }

  hit1 = collideRectCircle(x1,y1,100,100,x,y,50)
  hit2 = collideRectCircle(x2,y2,100,100,x,y,50)

  if(hit1||hit2){
    background(255,0,0)
    xSpeed1=0
    xSpeed2=0
    ySpeed1=0
    ySpeed2=0
    textSize(60)
    fill(255)
    text('YOU FAIL',width/2,height/2)
    textSize(30)
    fill(255)
    text('to continue press space bar',width/2,height/2 + 50)
  }
  if (keyIsDown(32)){
    x1 = 300
    x2 = 800
    y1 = 0
    y2 = 300
    level = 2
    xSpeed1 = -5
    xSpeed2 = 5
    ySpeed1 = 5
    ySpeed2 = 5
    x=640
    y=400
  }
}
