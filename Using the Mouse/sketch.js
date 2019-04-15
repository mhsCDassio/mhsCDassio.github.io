let x = 100
let y = 100

function setup() {
  // put setup code here
  createCanvas(600,600);
}

function draw() {
  background(240)
  // put drawing code here
  /*
  ellipse(mouseX,mouseY,10,10);
  if (mouseIsPressed) {
    fill(random(50),random(255),random(255));
  }
  */
  line(mouseX,mouseY,x,y)
  if (mouseIsPressed){
    x= mouseX
    y= mouseY
  }

}
