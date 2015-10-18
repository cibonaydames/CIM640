var canvas;
var upButton;
var downButton;
var x;
var y;
var ySpeed;

function setup() {
  canvas = createCanvas(500, 500); 
  upButton = createButton('Boost!');
  downButton = createButton('Down!');
  canvas.parent('middle_panel');
  upButton.mousePressed(getUp);
  downButton.mousePressed(getDown);
  upButton.parent('left_panel');
  downButton.parent('left_panel');
  x = width/2;
  y = height/2;
  ySpeed = 0;
}

function draw() {
  background(0);
  fill(255);
  ellipse(x,y,50,50);
  y = y + ySpeed;
}

function getUp() {
  ySpeed = -1;
  alert("Gettin up!");
}

function getDown() {
  ySpeed = 1;
  alert("Gettin down!");
}
/*
var canvas;
var upButton;
var downButton;
var x;
var y;
var ySpeed;

function setup() {
  canvas = createCanvas(500, 500); 
  upButton = createButton('Boost!');
  downButton = createButton('Down!');
  canvas.parent('middle_panel');
  upButton.mousePressed(getUp);
  downButton.mousePressed(getDown);
  upButton.parent('left_panel');
  downButton.parent('left_panel');
  x = width/2;
  y = height/2;
  ySpeed = 0;
}

function draw() {
  background(0);
  fill(255);
  ellipse(x,y,50,50);
  y = y + ySpeed;
}

function getUp() {
  ySpeed = -1;
  alert("Gettin up!");
}

function getDown() {
  ySpeed = 1;
  alert("Gettin down!");
}*/