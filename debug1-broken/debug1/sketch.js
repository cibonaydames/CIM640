/When it's fixed, it should draw a cross across on the screen as you move 
the mouse. When you hit any key, the background color will change. When you 
press a mouse button, the color of the cross will change.

- are we supposed to use lerp for the colors
- /

/*
var backgroundColor;
var crossColer;
var crossShadowColor;*/

var backgroundColor;
var crossColor;
var crossShadowColor;
var r, g, b;

/*
function setup() {
   	createCanvas(windowWidth, windowHeight);
   	backgroundColor = color(random(255, random(255), random(255));
   	crossShadowColor = setColor(0,0,0);
   	crossColor = color(random(255), random(255), random(255));
}*/

function setup() {
   	createCanvas(windowWidth, windowHeight);
   	backgroundColor = 
   	r = random(255);
   	g = random(255);
	b = random(255);
   	var crossShadowColor = setColor(0,0,0);
   	var crossColor = 
   	r = random(255);
   	g = random(255);
	b = random(255);
}

/*
function draw() {
	cross(mouseX, mouseY, crossColor, crossShadowColor);
}*/

function draw() {
	cross(mouseX, mouseY, crossColor, crossShadowColor);
}

/*
function keyReleased() {
	background(backgroundColor);
}
}*/

function keyReleased() {
	background(backgroundColor);
}

/*
function mousePressed() {
	crossColor = color(random(255), random(255), random(255));
}
*/

function mousePressed() {
	var crossColor = 
	r = random(255);
   	g = random(255);
	b = random(255);
}

/*
function cross(xPos,yPos,foreground,shadow) {
	//background cross
	fill(shadowColor);
	rect(xPos - 1, yPos - 1, 50, 10);
	rect(xPos + 20 - 1, y - 20 - 1, 10, 50);

	//foreground cross
	noStroke();
	fill(foreground);
	rect(xPos, yPos, 50, 10);
	rect(xPos + 20, yPos - 20, 10, 50);
}
*/

function cross(xPos,yPos,foreground,shadow) {
	//background cross
	fill(crossShadowColor);
	rect(xPos - 1, yPos - 1, 50, 10);
	rect(xPos + 20 - 1, y - 20 - 1, 10, 50);

	//foreground cross
	noStroke();
	fill(foreground);
	rect(xPos, yPos, 50, 10);
	rect(xPos + 20, yPos - 20, 10, 50);
}

/*
function draw() {
	cross(mouseX, mouseY, crossColor, crossShadowColor);
}
*/

function draw() {
	cross(mouseX, mouseY, crossColor, crossShadowColor);
}













