var canvas;
var canvasY = 0;
function setup() {
  canvas = createCanvas(500, 500); 
  canvas.parent('middle_panel');
}

function draw() {
  background(0);
  fill(255);
  ellipse(width/2, height/2, 50, 50);
}

function mousePressed() {
  canvasY++;
  canvas.position(canvas.x, canvasY);
}


/*var canvas;
var canvasY = 0;
function setup() {
  canvas = createCanvas(500, 500); 
  canvas.parent('middle_panel');
}

function draw() {
  background(0);
  fill(255);
  ellipse(width/2, height/2, 50, 50);
}

function mousePressed() {
  canvasY++;
  canvas.position(canvas.x, canvasY);
}
*/