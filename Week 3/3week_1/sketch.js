// global varabiles  below. counter: is the variable that you keep changing
var startColor;
var endColor;
var bgColor;
var counter;

function setup() {
  // uncomment this line to make the canvas the full size of the window
   	createCanvas(windowWidth, windowHeight);
	startColor = color(255,0,0);
	endColor = color(127,30,200);
  // counter should start between "0" and "1"
	counter = 1;
	bgColor = lerpColor(startColor, endColor, counter);


}

function draw() {
  	// draw stuff here - draw loops
  	background(bgColor);
  	counter = counter - .01;
	bgColor = lerpColor(startColor, endColor, counter);

}