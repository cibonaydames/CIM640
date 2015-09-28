var selectedBall;
var xCoordinates;
var yCoordinates;

function setup() {
	createCanvas(windowWidth, windowHeight); 
	selectedBall = 0;
	xCoordinates = [];
	yCoordinates = [];
}

function draw() {
	background(0);
	textSize(30);
	textAlign(LEFT);
	fill(255);
	text("X COORDINATES: " + xCoordinates.join(), 30, 30);
	text("LAST COORDINATE SET: " + xCoordinates[xCoordinates.length - 1] + "," + yCoordinates[yCoordinates.length - 1], 30, 60);
}

function mousePressed() {
	xCoordinates.push(mouseX);
	yCoordinates.push(mouseY);
}

function keyPressed() {
	xCoordinates.sort();
}