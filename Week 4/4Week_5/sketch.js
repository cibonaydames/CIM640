var x;
var y;
var easing;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	easing = .025;
	x = width/2;
	y = height/2;
}

function draw() {
	background(255);
	/Whereever the mouse is that is the target/
	var eX = (mouseX - x) * easing;
	var eY = (mouseY - y) * easing;

	x = x + eX;
	y = y + eY;

	if (dist(x, y, mouseX, mouseY) <= 5) {
	}

	else {
		fill(0,255,0);
	}
 
 ellipse(x, y, 20, 20);
}
