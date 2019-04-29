function setup() {
  createCanvas(800,600)
}

function draw() {
  background(240)
  noStroke()
  let y = 255
  let x = 0

  for(x=0; x<=height; x+=50){
    y-=20
    fill(0,y,200)
    rect(0,x,800,50)
  }
}
