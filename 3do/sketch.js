var hatColor;

function setup() {
  // uncomment this line to make the canvas the full size of the window
    createCanvas(windowWidth, windowHeight);
    hatColor = color(0,155,255);
    circleColor = color(0,255,255);
}


function draw() {
    // draw stuff here
    hatMan(mouseX, mouseY);
    
}

function mouseClicked() {
    hatColor = color(100);
    circleColor = color(200);
//    fill(200);
 //   triangle(x, y, 250, 200, 200, 300);
  }

 function mousePressed() {
    hatColor = color(50);
    circleColor = color(20);
    counter = 0;

  }


  function hatMan(x, y) {
    noStroke();
    fill(circleColor);
    ellipse(x-50, y+55, 50, 50);

   fill(hatColor);
    triangle(x, y, x+50, y+50, x+20, y+50);
  }