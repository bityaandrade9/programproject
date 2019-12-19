//The setup function only happens once
var t=1
function setup() {
	createCanvas(500, 500);
	background(249,223,226); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  noStroke(); 
  fill(255,165,127,t); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20); // center of canvas, 20px dia
}
function mousePressed(){
	t=t+5
}
