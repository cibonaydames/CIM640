
var dotSize = 5
function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);
  noFill();
  stroke(255);
  dotSize = map(mouseX, 0, width, 1, 40);
  /for every 5 pixels draw a rectangle 2x2/

  for (var x = 0; x < width; x+=20) {
    for (var y = 0; y < height; y+=20) {
      if (dist(mouseX, mouseY, x, y) < dotSize) {
        fill(255);
      }
      else {
        noFill();
      }
        ellipse(x, y, dotSize, dotSize);
        /ellipse(x, y, 2, 2);/
    }
  }


}


/*function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);
  noFill();
  stroke(255);
  
  for (var x = 0; x < width; x+=5) {
    for (var y = 0; y < height; y+=5) {
        rect(x, y, 2, 2);
    }
  }


}*/