//global variables - should be accessed from anywhere
var startColor;
var endColor;
var counter;
var bgColor;
var y = 0;
var ySpeed = 1;

function setup() {
  // uncomment this line to make the canvas the full size of the window
    createCanvas(windowWidth, windowHeight);
    startColor = color(255,0,0);
    endColor = color(127,30,200);
    counter = 0;
    bgColor = lerpColor(startColor, endColor, counter);

}

function draw() {
    // draw stuff here
    background(bgColor);
    counter = counter + .01;
    bgColor = lerpColor(startColor, endColor, counter);
    noStroke();
    fill(0);
    ellipse(width/2, y, 30, 30);
    y = y + ySpeed;
}

function keyPressed() {
    counter = 1;
}

function mousePressed() {
    ySpeed = ySpeed * -1;
}

function mouseDragged() {
    // The more that you drag it increases in small increments
    ySpeed = ySpeed * 1.01;
}