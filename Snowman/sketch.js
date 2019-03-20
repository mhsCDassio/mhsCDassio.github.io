function setup() {
  // put setup code here
  createCanvas(400,400)
}

function draw() {
  // put drawing code here
  //create the ground
  rect(0,350,400,50)

  //Crfeate the Snowman body
  ellipse(200,300,150,150)
  ellipse(200,200,100,100)
  ellipse(200,120,75,75)

//Create Arms
  line(160,200,100,100)
  line(240,200,300,100)
}
