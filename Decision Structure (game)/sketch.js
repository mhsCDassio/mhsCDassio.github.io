let x = 640
let y = 400
let y1 = 0
let y2 = 400

let ySpeed1 = 2
let ySpeed2 = -2

let hit1 = false
let hit2 = false

let level = 0

function setup() {
  createCanvas(1280,800)
}

function draw() {
  if (level === 0){
    background(0)
    fill(255)
    textAlign(CENTER,CENTER)
    textSize(32)
    text('ESCAPE ROOM',width/2,height/2)
    
    textSize(16)
    text('You are being held prisoner in this room. \nTo escape you have to move off the screen',width/2,height/2+50)
    text('Press enter to start playing', width/2, height/2+100)
    
    if (keyIsDown(ENTER)){
      level+=1
    }
  }
  
  else if (level === 1){
    background(240)
    fill(0,255,0)
    ellipse(x,y,25,25)
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
      level+=1
    }
  }
  
  else if (level === 2){
    background(240)
    x=640
    y=400
    fill(0)
    y1+=ySpeed1
    rect(400,y1,50,50)
    if (x>width || x<0 || y>height || y<0){
      level+=1
    }
    if(y1+50>=800 || y1<=0){
     ySpeed1 = ySpeed1*(-1)
   }
  }
  else if (level === 3){
    background(240)
    x=640
    y=400
    fill(0)
    y1+=ySpeed1
    y2+=ySpeed2
    rect(400,y1,50,50)
    rect(550,y2,50,50)
    if (x>width || x<0 || y>height || y<0){
      level+=1
    }
    if(y1+50>=800 || y1<=0){
      ySpeed1 = ySpeed1*(-1)
    }
    if(y2+50>=800 || y2<=0){
      ySpeed2 = ySpeed2*(-1)
    }
   }
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
  hit1 = collideRectCircle(400,y1,50,50,x,y,25)
  hit2 = collideRectCircle(550,y2,50,50,x,y,25)
  if(hit1||hit2){
    background(255,0,0)
    textSize(60)
    fill(255)
    text('YOU FAIL',width/5*2-20,height/2)
    textSize(30)
    fill(255)
    text('to continue press space bar',width/3+10,height/2 + 50)
  }
  if (keyIsDown(32)){
    x = 640
    y = 400
    level = 2
  }
}
