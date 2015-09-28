
function setup() {
	createCanvas(windowWidth, windowHeight);
	/starts drawing from center/
	rectMode(CENTER);
	background(255);
}

function draw() {
	

}

function keyPressed() {
	if (key == 'A'){
		ellipse(width/2,height/2, 40, 40);
	}
	else if(key == 'B') {
		rect(width/2, height/2, 40, 40);
	}
	/*else if (keyCode == UP_ARROW)*/
	else {
		line(0, height/2, width, height/2);
	}

}