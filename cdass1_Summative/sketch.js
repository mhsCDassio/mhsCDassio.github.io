/*
Summative game
Created by Clara
Started on June 4, 2019
*/

//Global Variables
let level = 0;
let wallpaper;
let brick;

let t = 1; // max. acceleration for each collision


let x1 = 200;
let y1 = 200;
let x2 = 400;
let y2 = 700;

let speedX = 3;
let speedY = 3;

//Bricks
//Row 1
let b1 = false;
let b2 = false;
let b3 = false;
let b4 = false;
let b5 = false;
let b6 = false;
//Row 2
let b7 = false;
let b8 = false;
let b9 = false;
let b10 = false;
let b11 = false;
let b12 = false;
//Row 3
let b13 = false;
let b14 = false;
let b15 = false;
let b16 = false;
let b17 = false;
let b18 = false;
//Row 4
let b19 = false;
let b20 = false;
let b21 = false;
let b22 = false;
let b23 = false;
let b24 = false;
//Row 5
let b25 = false;
let b26 = false;
let b27 = false;
let b28 = false;
let b29 = false;
let b30 = false;

let hit = false; //just for platform

let hit1 = false;
let hit2 = false;
let hit3 = false;
let hit4 = false;
let hit5 = false;
let hit6 = false;
let hit7 = false;
let hit8 = false;
let hit9 = false;
let hit10 = false;
let hit11 = false;
let hit12 = false;
let hit13 = false;
let hit14 = false;
let hit15 = false;
let hit16 = false;
let hit17 = false;
let hit18 = false;
let hit19 = false;
let hit20 = false;
let hit21 = false;
let hit22 = false;
let hit23 = false;
let hit24 = false;
let hit25 = false;
let hit26 = false;
let hit27 = false;
let hit28 = false;
let hit29 = false;
let hit30 = false;

function preload(){
  wallpaper = loadImage('Background.png');
  brick = loadImage("Brick.png");
  platform = loadImage("Platform.png");
}
function setup() {
  createCanvas(1280,800);
}

function draw() {
  //----------------Instructions----------------//
  if (level === 0){
    background(245);
    fill(0);
    textSize(100);
    text("BrickBreaker", 350,200);
    textSize(30);
    text("Instructions", 550,300);
    textSize(25);
    text("Move the platform with the left and right arrows to catch the ball,",270,360);
    text("it cannot touch the ground, if it does you lose,",370,400);
    text("the goal is to get the ball to touch the top of the screen.",320,440);
    text("The ball can break the bricks by touching them, opening a path to escape.",230,480);
    text("Every time the ball touches either the platform or a brick it will change speed.",220,520)
    textSize(40);
    text("Press ENTER to start playing.", 375, 650);
    if(keyIsDown(13)){
      level = 1;
      b1 = true;
      b2 = true;
      b3 = true;
      b4 = true;
      b5 = true;
      b6 = true;
    }
  }
  //----------------Level 1----------------//
  else if (level === 1){
    image(wallpaper,0,0);
    fill(0);
    textSize(20);
    text("Level 1", 1200,30); //The lines of code before will appear every level, they indicate what level you are in.
    //Row 1 of bricks
    if (b1===true){
      image(brick,15,50);
      hit1 = collideRectCircle(15,50,200,50,x1,y1,30);
    }
    if (b2===true){
      image(brick,225,50);
      hit2 = collideRectCircle(225,50,200,50,x1,y1,30);
    }
    if (b3===true){
      image(brick,435,50);
      hit3 = collideRectCircle(435,50,200,50,x1,y1,30);
    }
    if (b4===true){
      image(brick,645,50);
      hit4 = collideRectCircle(645,50,200,50,x1,y1,30);
    }
    if (b5===true){
      image(brick,855,50);
      hit5 = collideRectCircle(855,50,200,50,x1,y1,30);
    }
    if (b6===true){
      image(brick,1065,50);
      hit6 = collideRectCircle(1065,50,200,50,x1,y1,30);
    }
    //Ball that destroys the bricks and moving platform to keep the ball from hitting hte bottom.
    fill(152, 66, 244);
    ellipse(x1,y1,30,30);
    x1+=speedX;
    y1+=speedY;
    if (x1+15>=width || x1-15<=0){
      speedX=speedX*(-1);
    }
    fill(18, 56, 206);
    noStroke();
    image(platform,x2,y2);
    if (keyIsDown(LEFT_ARROW)){
      x2 -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)){
      x2 += 10;
    }
    hit = collideRectCircle(x2,y2,200,20,x1,y1,30); //Collision platform and ball, to change ball direction
    if (hit){
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Collision of ball with bricks and "destoying" them = disappearing
    if (hit1){
      b1 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit2){
      b2 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit3){
      b3 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit4){
      b4 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit5){
      b5 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit6){
      b6 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Disabling collision
    if(b1===false){
      hit1 = false;
    }
    if(b2===false){
      hit2 = false;
    }
    if(b3===false){
      hit3 = false;
    }
    if(b4===false){
      hit4 = false;
    }
    if(b5===false){
      hit5 = false;
    }
    if(b6===false){
      hit6 = false;
    }

    if (y1>=height){
      level = 7;
    }
    if (y1-15<=0){ //Advanve to next level
      level+=1;
      b1 = true;
      b2 = true;
      b3 = true;
      b4 = true;
      b5 = true;
      b6 = true;
      b7 = true;
      b8 = true;
      b9 = true;
      b10 = true;
      b11 = true;
      b12 = true;
      speedX = 3;
      speedY = 3;
      x1 = 300;
      y1 = 300;
      x2 = 400;
      y2 = 700;
    }
  }
  //----------------Level 2----------------//
  else if (level === 2){
    image(wallpaper,0,0);
    fill(0);
    textSize(20);
    text("Level 2", 1200,30);

    if (b1===true){
      image(brick,15,50);
      hit1 = collideRectCircle(15,50,200,50,x1,y1,30);
    }
    if (b2===true){
      image(brick,225,50);
      hit2 = collideRectCircle(225,50,200,50,x1,y1,30);
    }
    if (b3===true){
      image(brick,435,50);
      hit3 = collideRectCircle(435,50,200,50,x1,y1,30);
    }
    if (b4===true){
      image(brick,645,50);
      hit4 = collideRectCircle(645,50,200,50,x1,y1,30);
    }
    if (b5===true){
      image(brick,855,50);
      hit5 = collideRectCircle(855,50,200,50,x1,y1,30);
    }
    if (b6===true){;
      image(brick,1065,50);
      hit6 = collideRectCircle(1065,50,200,50,x1,y1,30);
    }
    //Row 2
    if (b7===true){
      image(brick,15,110);
      hit7 = collideRectCircle(15,110,200,50,x1,y1,30);
    }
    if (b8===true){
      image(brick,225,110);
      hit8 = collideRectCircle(225,110,200,50,x1,y1,30);
    }
    if (b9===true){
      image(brick,435,110);
      hit9 = collideRectCircle(435,110,200,50,x1,y1,30);
    }
    if (b10===true){
      image(brick,645,110);
      hit10 = collideRectCircle(645,110,200,50,x1,y1,30);
    }
    if (b11===true){
      image(brick,855,110);
      hit11 = collideRectCircle(855,110,200,50,x1,y1,30);
    }
    if (b12===true){
      image(brick,1065,110);
      hit12 = collideRectCircle(1065,110,200,50,x1,y1,30);
    }

    fill(152, 66, 244);
    ellipse(x1,y1,30,30);
    x1+=speedX;
    y1+=speedY;
    if (x1+15>=width || x1-15<=0){
      speedX=speedX*(-1);
    }
    fill(18, 56, 206);
    noStroke();
    image(platform,x2,y2);
    if (keyIsDown(LEFT_ARROW)){
      x2 -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)){
      x2 += 10;
    }
    hit = collideRectCircle(x2,y2,200,20,x1,y1,30);
    if (hit){
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
  //Collision and bricks disappear
    if (hit1){
      b1 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit2){
      b2 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit3){
      b3 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit4){
      b4 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit5){
      b5 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit6){
      b6 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 2
    if (hit7){
      b7 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit8){
      b8 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit9){
      b9 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit10){
      b10 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit11){
      b11 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit12){
      b12 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
  //Disable collision
    if(b1===false){
      hit1 = false;
    }
    if(b2===false){
      hit2 = false;
    }
    if(b3===false){
      hit3 = false;
    }
    if(b4===false){
      hit4 = false;
    }
    if(b5===false){
      hit5 = false;
    }
    if(b6===false){
      hit6 = false;
    }
    //Row 2
    if(b7===false){
      hit7 = false;
    }
    if(b8===false){
      hit8 = false;
    }
    if(b9===false){
      hit9 = false;
    }
    if(b10===false){
      hit10 = false;
    }
    if(b11===false){
      hit11 = false;
    }
    if(b12===false){
      hit12 = false;
    }

    if (y1>=height){
      level = 7;
    }

    if (y1-15<=0){
      level+=1;
      b1 = true;
      b2 = true;
      b3 = true;
      b4 = true;
      b5 = true;
      b6 = true;
      b7 = true;
      b8 = true;
      b9 = true;
      b10 = true;
      b11 = true;
      b12 = true;
      b13 = true;
      b14 = true;
      b15 = true;
      b16 = true;
      b17 = true;
      b18 = true;

      speedX = 3;
      speedY = 3;

      x1 = 400;
      y1 = 400;
      x2 = 400;
      y2 = 700;
    }
  }
  //----------------Level 3----------------//
  else if (level === 3){
    image(wallpaper,0,0);
    fill(0);
    textSize(20);
    text("Level 3", 1200,30);
    print(speedX);
    print(speedY);
    //Row 1
    if (b1===true){
      image(brick,15,50);
      hit1 = collideRectCircle(15,50,200,50,x1,y1,30);
    }
    if (b2===true){
      image(brick,225,50);
      hit2 = collideRectCircle(225,50,200,50,x1,y1,30);
    }
    if (b3===true){
      image(brick,435,50);
      hit3 = collideRectCircle(435,50,200,50,x1,y1,30);
    }
    if (b4===true){
      image(brick,645,50);
      hit4 = collideRectCircle(645,50,200,50,x1,y1,30);
    }
    if (b5===true){
      image(brick,855,50);
      hit5 = collideRectCircle(855,50,200,50,x1,y1,30);
    }
    if (b6===true){
      image(brick,1065,50);
      hit6 = collideRectCircle(1065,50,200,50,x1,y1,30);
    }
    //Row 2
    if (b7===true){
      image(brick,15,110);
      hit7 = collideRectCircle(15,110,200,50,x1,y1,30);
    }
    if (b8===true){
      image(brick,225,110);
      hit8 = collideRectCircle(225,110,200,50,x1,y1,30);
    }
    if (b9===true){
      image(brick,435,110);
      hit9 = collideRectCircle(435,110,200,50,x1,y1,30);
    }
    if (b10===true){
      image(brick,645,110);
      hit10 = collideRectCircle(645,110,200,50,x1,y1,30);
    }
    if (b11===true){
      image(brick,855,110);
      hit11 = collideRectCircle(855,110,200,50,x1,y1,30);
    }
    if (b12===true){
      image(brick,1065,110);
      hit12 = collideRectCircle(1065,110,200,50,x1,y1,30);
    }
    //Row 3
    if (b13===true){
      image(brick,15,170);
      hit13 = collideRectCircle(15,170,200,50,x1,y1,30);
    }
    if (b14===true){
      image(brick,225,170);
      hit14 = collideRectCircle(225,170,200,50,x1,y1,30);
    }
    if (b15===true){
      image(brick,435,170);
      hit15 = collideRectCircle(435,170,200,50,x1,y1,30);
    }
    if (b16===true){
      image(brick,645,170);
      hit16 = collideRectCircle(645,170,200,50,x1,y1,30);
    }
    if (b17===true){
      image(brick,855,170);
      hit17 = collideRectCircle(855,170,200,50,x1,y1,30);
    }
    if (b18===true){
      image(brick,1065,170);
      hit18 = collideRectCircle(1065,170,200,50,x1,y1,30);
    }

    fill(152, 66, 244);
    ellipse(x1,y1,30,30);
    x1+=speedX;
    y1+=speedY;
    if (x1+15>=width || x1-15<=0){
      speedX=speedX*(-1);
    }
    fill(18, 56, 206);
    noStroke();
    image(platform,x2,y2);
    if (keyIsDown(LEFT_ARROW)){
      x2 -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)){
      x2 += 10;
    }
    hit = collideRectCircle(x2,y2,200,20,x1,y1,30);
    if (hit){
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
  //Collision and bricks disappear
  //Row 1
    if (hit1){
      b1 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit2){
      b2 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit3){
      b3 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit4){
      b4 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit5){
      b5 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit6){
      b6 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 2
    if (hit7){
      b7 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit8){
      b8 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit9){
      b9 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit10){
      b10 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit11){
      b11 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit12){
      b12 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 3
    if (hit13){
      b13 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit14){
      b14 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit15){
      b15 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit16){
      b16 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit17){
      b17 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit18){
      b18 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }

  //Disable collision
    if(b1===false){
      hit1 = false;
    }
    if(b2===false){
      hit2 = false;
    }
    if(b3===false){
      hit3 = false;
    }
    if(b4===false){
      hit4 = false;
    }
    if(b5===false){
      hit5 = false
    }
    if(b6===false){
      hit6 = false;
    }
    //Row 2
    if(b7===false){
      hit7 = false;
    }
    if(b8===false){
      hit8 = false;
    }
    if(b9===false){
      hit9 = false;
    }
    if(b10===false){
      hit10 = false;
    }
    if(b11===false){
      hit11 = false;
    }
    if(b12===false){
      hit12 = false;
    }
    //Row 3
    if(b13===false){
      hit13 = false;
    }
    if(b14===false){
      hit14 = false;
    }
    if(b15===false){
      hit15 = false;
    }
    if(b16===false){
      hit16 = false;
    }
    if(b17===false){
      hit17 = false;
    }
    if(b18===false){
      hit18 = false;
    }

    if (y1>=height){
      level = 7;
    }

    if (y1-15<=0){
      level+=1
      b1 = true;
      b2 = true;
      b3 = true;
      b4 = true;
      b5 = true;
      b6 = true;
      b7 = true;
      b8 = true;
      b9 = true;
      b10 = true;
      b11 = true;
      b12 = true;
      b13 = true;
      b14 = true;
      b15 = true;
      b16 = true;
      b17 = true;
      b18 = true;
      b19 = true;
      b20 = true;
      b21 = true;
      b22 = true;
      b23 = true;
      b24 = true;

      speedX = 4;
      speedY = 4;

      x1= 400;
      y1= 500;
      x2 = 400;
      y2 = 700;
    }
  }
  //----------------Level 4----------------//
  else if (level === 4){
    image(wallpaper,0,0);
    fill(0);
    textSize(20);
    text("Level 4", 1200,30);
    //Row 1
    if (b1===true){
      image(brick,15,50);
      hit1 = collideRectCircle(15,50,200,50,x1,y1,30);
    }
    if (b2===true){
      image(brick,225,50);
      hit2 = collideRectCircle(225,50,200,50,x1,y1,30);
    }
    if (b3===true){
      image(brick,435,50);
      hit3 = collideRectCircle(435,50,200,50,x1,y1,30);
    }
    if (b4===true){
      image(brick,645,50);
      hit4 = collideRectCircle(645,50,200,50,x1,y1,30);
    }
    if (b5===true){
      image(brick,855,50);
      hit5 = collideRectCircle(855,50,200,50,x1,y1,30);
    }
    if (b6===true){
      image(brick,1065,50);
      hit6 = collideRectCircle(1065,50,200,50,x1,y1,30);
    }
    //Row 2
    if (b7===true){
      image(brick,15,110);
      hit7 = collideRectCircle(15,110,200,50,x1,y1,30);
    }
    if (b8===true){
      image(brick,225,110);
      hit8 = collideRectCircle(225,110,200,50,x1,y1,30);
    }
    if (b9===true){
      image(brick,435,110);
      hit9 = collideRectCircle(435,110,200,50,x1,y1,30);
    }
    if (b10===true){
      image(brick,645,110);
      hit10 = collideRectCircle(645,110,200,50,x1,y1,30);
    }
    if (b11===true){
      image(brick,855,110);
      hit11 = collideRectCircle(855,110,200,50,x1,y1,30);
    }
    if (b12===true){
      image(brick,1065,110);
      hit12 = collideRectCircle(1065,110,200,50,x1,y1,30);
    }
    //Row 3
    if (b13===true){
      image(brick,15,170);
      hit13 = collideRectCircle(15,170,200,50,x1,y1,30);
    }
    if (b14===true){
      image(brick,225,170);
      hit14 = collideRectCircle(225,170,200,50,x1,y1,30);
    }
    if (b15===true){
      image(brick,435,170);
      hit15 = collideRectCircle(435,170,200,50,x1,y1,30);
    }
    if (b16===true){
      image(brick,645,170);
      hit16 = collideRectCircle(645,170,200,50,x1,y1,30);
    }
    if (b17===true){
      image(brick,855,170);
      hit17 = collideRectCircle(855,170,200,50,x1,y1,30);
    }
    if (b18===true){
      image(brick,1065,170);
      hit18 = collideRectCircle(1065,170,200,50,x1,y1,30);
    }
    //Row 4
    if (b19===true){
      image(brick,15,230);
      hit19 = collideRectCircle(15,230,200,50,x1,y1,30);
    }
    if (b20===true){
      image(brick,225,230);
      hit20 = collideRectCircle(225,230,200,50,x1,y1,30);
    }
    if (b21===true){
      image(brick,435,230);
      hit21 = collideRectCircle(435,230,200,50,x1,y1,30);
    }
    if (b22===true){
      image(brick,645,230);
      hit22 = collideRectCircle(645,230,200,50,x1,y1,30);
    }
    if (b23===true){
      image(brick,855,230);
      hit23 = collideRectCircle(855,230,200,50,x1,y1,30);
    }
    if (b24===true){
      image(brick,1065,230);
      hit24 = collideRectCircle(1065,230,200,50,x1,y1,30);
    }

    fill(152, 66, 244);
    ellipse(x1,y1,30,30);
    x1+=speedX;
    y1+=speedY;
    if (x1+15>=width || x1-15<=0){
      speedX=speedX*(-1);
    }
    fill(18, 56, 206);
    noStroke();
    image(platform,x2,y2);
    if (keyIsDown(LEFT_ARROW)){
      x2 -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)){
      x2 += 10;
    }
    hit = collideRectCircle(x2,y2,200,20,x1,y1,30);
    if (hit){
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
  //Collision and bricks disappear
    if (hit1){
      b1 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit2){
      b2 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit3){
      b3 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit4){
      b4 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit5){
      b5 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit6){
      b6 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 2
    if (hit7){
      b7 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit8){
      b8 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit9){
      b9 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit10){
      b10 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit11){
      b11 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit12){
      b12 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 3
    if (hit13){
      b13 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit14){
      b14 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit15){
      b15 = false
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit16){
      b16 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit17){
      b17 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit18){
      b18 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 4
    if (hit19){
      b19 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit20){
      b20 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit21){
      b21 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit22){
      b22 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit23){
      b23 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit24){
      b24 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }

  //Disable collision
    if(b1===false){
      hit1 = false;
    }
    if(b2===false){
      hit2 = false;
    }
    if(b3===false){
      hit3 = false;
    }
    if(b4===false){
      hit4 = false;
    }
    if(b5===false){
      hit5 = false;
    }
    if(b6===false){
      hit6 = false;
    }
    //Row 2
    if(b7===false){
      hit7 = false;
    }
    if(b8===false){
      hit8 = false;
    }
    if(b9===false){
      hit9 = false;
    }
    if(b10===false){
      hit10 = false;
    }
    if(b11===false){
      hit11 = false;
    }
    if(b12===false){
      hit12 = false;
    }
    //Row 3
    if(b13===false){
      hit13 = false;
    }
    if(b14===false){
      hit14 = false;
    }
    if(b15===false){
      hit15 = false;
    }
    if(b16===false){
      hit16 = false;
    }
    if(b17===false){
      hit17 = false;
    }
    if(b18===false){
      hit18 = false;
    }
    //Row 4
    if(b19===false){
      hit19 = false;
    }
    if(b20===false){
      hit20 = false;
    }
    if(b21===false){
      hit21 = false;
    }
    if(b22===false){
      hit22 = false;
    }
    if(b23===false){
      hit23 = false;
    }
    if(b24===false){
      hit24 = false;
    }

    if (y1>=height){
      level = 7;
    }

    if (y1-15<=0){
      level+=1
      b1 = true;
      b2 = true;
      b3 = true;
      b4 = true;
      b5 = true;
      b6 = true;
      b7 = true;
      b8 = true;
      b9 = true;
      b10 = true;
      b11 = true;
      b12 = true;
      b13 = true;
      b14 = true;
      b15 = true;
      b16 = true;
      b17 = true;
      b18 = true;
      b19 = true;
      b20 = true;
      b21 = true;
      b22 = true;
      b23 = true;
      b24 = true;
      b25 = true;
      b26 = true;
      b27 = true;
      b28 = true;
      b29 = true;
      b30 = true;

      speedX = 4;
      speedY = 4;

      x1= 400;
      y1= 500;
      x2 = 400;
      y2 = 700;
    }
  }
  //----------------Level 5----------------//
  else if (level === 5){
    image(wallpaper,0,0);
    fill(0);
    textSize(20);
    text("Level 5", 1200,30);
    //Row 1
    if (b1===true){
      image(brick,15,50);
      hit1 = collideRectCircle(15,50,200,50,x1,y1,30);
    }
    if (b2===true){
      image(brick,225,50);
      hit2 = collideRectCircle(225,50,200,50,x1,y1,30);
    }
    if (b3===true){
      image(brick,435,50);
      hit3 = collideRectCircle(435,50,200,50,x1,y1,30);
    }
    if (b4===true){
      image(brick,645,50);
      hit4 = collideRectCircle(645,50,200,50,x1,y1,30);
    }
    if (b5===true){
      image(brick,855,50);
      hit5 = collideRectCircle(855,50,200,50,x1,y1,30);
    }
    if (b6===true){
      image(brick,1065,50);
      hit6 = collideRectCircle(1065,50,200,50,x1,y1,30);
    }
    //Row 2
    if (b7===true){
      image(brick,15,110);
      hit7 = collideRectCircle(15,110,200,50,x1,y1,30);
    }
    if (b8===true){
      image(brick,225,110);
      hit8 = collideRectCircle(225,110,200,50,x1,y1,30);
    }
    if (b9===true){
      image(brick,435,110);
      hit9 = collideRectCircle(435,110,200,50,x1,y1,30);
    }
    if (b10===true){
      image(brick,645,110);
      hit10 = collideRectCircle(645,110,200,50,x1,y1,30);
    }
    if (b11===true){
      image(brick,855,110);
      hit11 = collideRectCircle(855,110,200,50,x1,y1,30);
    }
    if (b12===true){
      image(brick,1065,110);
      hit12 = collideRectCircle(1065,110,200,50,x1,y1,30);
    }
    //Row 3
    if (b13===true){
      image(brick,15,170);
      hit13 = collideRectCircle(15,170,200,50,x1,y1,30);
    }
    if (b14===true){
      image(brick,225,170);
      hit14 = collideRectCircle(225,170,200,50,x1,y1,30);
    }
    if (b15===true){
      image(brick,435,170);
      hit15 = collideRectCircle(435,170,200,50,x1,y1,30);
    }
    if (b16===true){
      image(brick,645,170);
      hit16 = collideRectCircle(645,170,200,50,x1,y1,30);
    }
    if (b17===true){
      image(brick,855,170);
      hit17 = collideRectCircle(855,170,200,50,x1,y1,30);
    }
    if (b18===true){
      image(brick,1065,170);
      hit18 = collideRectCircle(1065,170,200,50,x1,y1,30);
    }
    //Row 4
    if (b19===true){
      image(brick,15,230);
      hit19 = collideRectCircle(15,230,200,50,x1,y1,30);
    }
    if (b20===true){
      image(brick,225,230);
      hit20 = collideRectCircle(225,230,200,50,x1,y1,30);
    }
    if (b21===true){
      image(brick,435,230);
      hit21 = collideRectCircle(435,230,200,50,x1,y1,30);
    }
    if (b22===true){
      image(brick,645,230);
      hit22 = collideRectCircle(645,230,200,50,x1,y1,30);
    }
    if (b23===true){
      image(brick,855,230);
      hit23 = collideRectCircle(855,230,200,50,x1,y1,30);
    }
    if (b24===true){
      image(brick,1065,230);
      hit24 = collideRectCircle(1065,230,200,50,x1,y1,30);
    }
    //Row 5
    if (b25===true){
      image(brick,15,290);
      hit25 = collideRectCircle(15,290,200,50,x1,y1,30);
    }
    if (b26===true){
      image(brick,225,290);
      hit26 = collideRectCircle(255,290,200,50,x1,y1,30);
    }
    if (b27===true){
      image(brick,435,290);
      hit27 = collideRectCircle(435,290,200,50,x1,y1,30);
    }
    if (b28===true){
      image(brick,645,290);
      hit28 = collideRectCircle(645,290,200,50,x1,y1,30);
    }
    if (b29===true){
      image(brick,855,290);
      hit29 = collideRectCircle(855,290,200,50,x1,y1,30);
    }
    if (b30===true){
      image(brick,1065,290);
      hit30 = collideRectCircle(1065,290,200,50,x1,y1,30);
    }

    fill(152, 66, 244);
    ellipse(x1,y1,30,30);
    x1+=speedX;
    y1+=speedY;
    if (x1+15>=width || x1-15<=0){
      speedX=speedX*(-1);
    }
    fill(18, 56, 206);
    noStroke();
    image(platform,x2,y2);
    if (keyIsDown(LEFT_ARROW)){
      x2 -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)){
      x2 += 10;
    }
    hit = collideRectCircle(x2,y2,200,20,x1,y1,30);
    if (hit){
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
  //Collision and bricks disappear
    if (hit1){
      b1 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit2){
      b2 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit3){
      b3 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit4){
      b4 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit5){
      b5 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit6){
      b6 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 2
    if (hit7){
      b7 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit8){
      b8 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit9){
      b9 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit10){
      b10 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit11){
      b11 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit12){
      b12 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 3
    if (hit13){
      b13 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit14){
      b14 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit15){
      b15 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit16){
      b16 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit17){
      b17 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit18){
      b18 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 4
    if (hit19){
      b19 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit20){
      b20 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit21){
      b21 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit22){
      b22 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit23){
      b23 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit24){
      b24 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    //Row 5
    if (hit25){
      b25 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit26){
      b26 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit27){
      b27 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit28){
      b28 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit29){
      b29 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }
    if (hit30){
      b30 = false;
      speedY+=random(0,t);
      speedX+=random(0,t);
      speedY=speedY*(-1);
    }

  //Disable collision
    if(b1===false){
      hit1 = false;
    }
    if(b2===false){
      hit2 = false;
    }
    if(b3===false){
      hit3 = false;
    }
    if(b4===false){
      hit4 = false;
    }
    if(b5===false){
      hit5 = false;
    }
    if(b6===false){
      hit6 = false;
    }
    //Row 2
    if(b7===false){
      hit7 = false;
    }
    if(b8===false){
      hit8 = false;
    }
    if(b9===false){
      hit9 = false;
    }
    if(b10===false){
      hit10 = false;
    }
    if(b11===false){
      hit11 = false;
    }
    if(b12===false){
      hit12 = false;
    }
    //Row 3
    if(b13===false){
      hit13 = false;
    }
    if(b14===false){
      hit14 = false;
    }
    if(b15===false){
      hit15 = false;
    }
    if(b16===false){
      hit16 = false;
    }
    if(b17===false){
      hit17 = false;
    }
    if(b18===false){
      hit18 = false;
    }
    //Row 4
    if(b19===false){
      hit19 = false;
    }
    if(b20===false){
      hit20 = false;
    }
    if(b21===false){
      hit21 = false;
    }
    if(b22===false){
      hit22 = false;
    }
    if(b23===false){
      hit23 = false;
    }
    if(b24===false){
      hit24 = false;
    }
    //Row 5
    if(b25===false){
      hit25 = false;
    }
    if(b26===false){
      hit26 = false;
    }
    if(b27===false){
      hit27 = false;
    }
    if(b28===false){
      hit28 = false;
    }
    if(b29===false){
      hit29 = false;
    }
    if(b30===false){
      hit30 = false;
    }


    if (y1>=height){
      level = 7;
    }

    if (y1-15<=0){
      level+=1;
    }
  }
  //----------------You Win----------------//
  else if (level === 6){
    background(0,255,0);
    textSize(60);
    fill(255);
    text("YOU WIN!", 500,330);
    textSize(40);
    text("To restart press ENTER", 430, 450);
    if (keyIsDown(13)){
      level = 1;
      b1 = true;
      b2 = true;
      b3 = true;
      b4 = true;
      b5 = true;
      b6 = true;
      x1 = 200;
      y1 = 200;
      speedX = 3;
      speedY = 3;
    }
  }
  //----------------You Fail----------------//
  else if ( level === 7){
    background(255,0,0);
    textSize(60);
    fill(0);
    text("YOU FAIL",500,330);
    textSize(40);
    text("To restart press ENTER", 430,450);
    if (keyIsDown(13)){
      level = 1;
      b1 = true;
      b2 = true;
      b3 = true;
      b4 = true;
      b5 = true;
      b6 = true;
      x1 = 200;
      y1 = 200;
      x2 = 400;
      y2 = 700;
      speedX = 3;
      speedY = 3;
    }
  }
}
