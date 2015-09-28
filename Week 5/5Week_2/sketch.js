var selectedBall;
var ballSizes;

function setup() {
	createCanvas(windowWidth, windowHeight); 
	selectedBall = 0;
	ballSizes = [40,50,30,20];
}

function draw() {
	background(0);
	textSize(30);
	textAlign(CENTER);
	fill(255);
	stroke(127,0,127);
	strokeWeight(3);
	text("CURRENT BALL SELECTED: " + selectedBall, width/2, height/2);
	text("BALL SIZE: " + ballSizes[selectedBall], width/2, height/1.5);
	fill(127,127,0);
	noStroke();
	ellipse(mouseX, mouseY, ballSizes[selectedBall], ballSizes[selectedBall]);
}

function mousePressed() {
	selectedBall++;

	if (selectedBall >= ballSizes.length) {
		selectedBall = 0;
	}
}