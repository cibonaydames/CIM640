var selectedBall;
var ballSizes;

function setup() {
	createCanvas(windowWidth, windowHeight); 
	selectedBall = 0;
	ballSizes = [40,50,30,20];
}

function draw() {
	background(0);
	ellipse(mouseX, mouseY, ballSizes[selectedBall], ballSizes[selectedBall]);
}

function mousePressed() {
	selectedBall++;

	if (selectedBall >= ballSizes.length) {
		selectedBall = 0;
	}
}