function setup() {
  // uncomment this line to make the canvas the full size of the window
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    // draw stuff here - items at the top will be drawn on the canvas first
    // background of the canvas not the shape
    background(255,255,255);
    line(0,0, 500, 500);
    quad(mouseX, 10, 100, 50, 110, 200, 15, 240);
    ellipse(50, 50, 10, 10);
    rect(300, 300, 50, 60);
    triangle(5, 300, 20, 250, 60, 310);
}