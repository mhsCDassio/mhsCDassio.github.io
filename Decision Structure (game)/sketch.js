let x = 100
let y = 400
let y1 = 0
let y2 = 400
let y3 = 300
let y4 = 100

let ySpeed1 = 2
let ySpeed2 = -2
let ySpeed3 = 1.9
let ySpeed4 = 3

let hit1 = false
let hit2 = false
let hit3 = false
let hit4 = false

let lvl2 = false

function setup() {
  createCanvas(1280,800)
}

function draw() {
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
  fill(0)
  y1+=ySpeed1
  y2+=ySpeed2
  y3+=ySpeed3
  y4+=ySpeed4

  rect(400,y1,20,400)
  rect(550,y2,20,350)
  rect(700,y3,20,200)
  rect(860,y4,20,500)

  if(y1+400>=800 || y1<=0){
    ySpeed1 = ySpeed1*(-1)
  }
  if(y2+350>=800 || y2<=0){
    ySpeed2 = ySpeed2*(-1)
  }
  if(y3+200>=800 || y3<=0){
    ySpeed3 = ySpeed3*(-1)
  }
  if(y4+500>=800 || y4<=0){
    ySpeed4 = ySpeed4*(-1)
  }
  hit1 = collideRectCircle(400,y1,20,400,x,y,25)
  hit2 = collideRectCircle(550,y2,20,350,x,y,25)
  hit3 = collideRectCircle(700,y3,20,200,x,y,25)
  hit4 = collideRectCircle(860,y4,20,500,x,y,25)
  if(hit1||hit2||hit3||hit4){
    background(255,0,0)
    textSize(60)
    fill(255)
    text('YOU FAIL',width/5*2-20,height/2)
    textSize(30)
    fill(255)
    text('to continue press space bar',width/3+10,height/2 + 50)
  }
  if (keyIsDown(32)){
    x = 100
    y = 400
  }
  if (x>=900){
    background(240)
    textSize(40)
    text('Press Tab for Lvl 2',width/3+10,height/2 + 50)
  }
  if (keyIsDown(13)){
    lvl2 = true
    x=100
    y=400
  }
  if(lvl2){
    fill(0,240,0)
    textSize(12)
    text('lvl 2',10,10)
    ySpeed1 = ySpeed1 + 5
    ySpeed2-=2
    ySpeed3+=2
    ySpeed4+=1.5
  }
}
