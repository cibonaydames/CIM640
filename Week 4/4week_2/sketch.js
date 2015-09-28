var y;
var yDirection;
var ySpeed;

function setup() {
	createCanvas(windowWidth, windowHeight);
	/start at 0/
	y =	0;
	yDirection = 1;
	ySpeed = 5;
}

/Funcition draw loops/
function draw() {
	background(0);
	ellipse(width/2, y, 50, 50);
	/*ySpeed = mouseY*/
	ySpeed = map(mouseY, 0, height, 0, 50)
	if (y > height) {
		/speed or you can use framerate but it slows down the browser/
		yDirection = -1;

	}

	if (y < 0) {
		yDirection = 1;
	}
	
	y = y + (yDirection * ySpeed);


}

/*
var y;

function setup() {
	createCanvas(windowWidth, windowHeight);
	y =	0;
}

function draw() {
	background(0);
	ellipse(width/2, y, 50, 50);

	if (y > height) {
		y = 0;
	}
	
	y = y + 1;

}
*/