
function setup() {
	createCanvas(windowWidth, windowHeight);
	y =	0;
}

function draw() {
	background(0);
	var oneThird = width/3;
	var twoThirds = width - width/3;

	/|| is or/
	if (mouseY < 100 || mouseY > height - 100) {
		fill(255,0,0);				
	}

	/&& is and/
	if (mouseX > oneThird && mouseX < twoThirds) {
		rect(oneThird, 0, oneThird, height);
	}


}