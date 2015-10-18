var canvas;
var ballSize;
var ballColor;
var nameField;
function setup() {
  canvas = createCanvas(500, 500); 
  ballColor = document.getElementById('colorSelector');
  ballSize = document.getElementById('ballSlider');
  nameField = document.getElementById('nameField');
  canvas.parent('middle_panel');
  background(0);
}

function draw() {
  background(0);
  fill(255);
  text(nameField.value, 20, 20);
  fill(ballColor.value);
  ellipse(width/2, height/2, ballSize.value, ballSize.value);
}


/*var canvas;
var ballSize;
var ballColor;
var nameField;
function setup() {
  canvas = createCanvas(500, 500); 
  ballColor = document.getElementById('colorSelector');
  ballSize = document.getElementById('ballSlider');
  nameField = document.getElementById('nameField');
  canvas.parent('middle_panel');
  background(0);
}

function draw() {
  background(0);
  fill(255);
  text(nameField.value, 20, 20);
  fill(ballColor.value);
  ellipse(width/2, height/2, ballSize.value, ballSize.value);
}
}*/