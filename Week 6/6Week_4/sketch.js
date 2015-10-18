/one array for x and one array for y/

var xPoints = [];
var yPoints = [];
var colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);

  for (var i = 0; i < xPoints.length; i++) {
/The ellipse is 5 wide 5 tall/
    ellipse(xPoints[i], yPoints[i], 5, 5);

    if (xPoints.length > 1) {
      stroke(colors[i]);
      line(xPoints[i], yPoints[i], xPoints[i + 1], yPoints[i+1]);
    }

  }

  for (var i = 0; i < xPoints.length; i++) {
    xPoints[i] +=1;
  }

}

function mousePressed() {
  xPoints.push(mouseX);
  yPoints.push(mouseY);
  colors.push( color(random(255), random(255), random(255)) );

}

/*var xPoints = [];
var yPoints = []

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);
  stroke(255);

  for (var i = 0; i < xPoints.length; i++) {

    ellipse(xPoints[i], yPoints[i], 5, 5);

    if (xPoints.length > 1) {
      line(xPoints[i], yPoints[i], xPoints[i + 1], yPoints[i+1]);
    }

  }

}

function mousePressed() {
  xPoints.push(mouseX);
  yPoints.push(mouseY);

}*/