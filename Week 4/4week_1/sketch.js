var shouldDrawCircle = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	if (shouldDrawCircle == true) {
		ellipse(mouseX,mouseY, 50, 50);
	}
}

function mousePressed() {

	if (shouldDrawCircle == true) {
		shouldDrawCircle = false;
	}
	else {
		shouldDrawCircle = true;
	}
}