function setup() {
  // uncomment this line to make the canvas the full size of the window
  // createCanvas(windowWidth, windowHeight);
  createCanvas(640, 480);
	background(127);
}

function draw() {
  // draw stuff here
  ellipse(width/2, height/2, 50, 50);
  ellipse(mouseX, mouseY, 60, 50)
}

function alert2(saywhat) {
	alert(saywhat);
}

function randomLetterFromText(text) {
	var letterNumber = random(text.length);
	var letter = text.charAt(letterNumber);
	return letter;
}

function gimmeTwo() {
	return 2;
}