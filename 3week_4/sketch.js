function setup() {
  // uncomment this line to make the canvas the full size of the window
    createCanvas(windowWidth, windowHeight);
    //background (255,255,255);
}

function draw() {
    fill(255,255,255,50);
    rect(0,0,width,height);
}

function keyPressed() {
    //draw a diagonal line starting from top left corner
    line(0, 0, width, height);

}

function keyReleased() {
    //draw a diagonal line starting from the top right corner
    line(width, 0, 0, height);

}

function mousePressed() {
    ellipse(width/2, 20, 20, 20);
}
function mouseReleased() {
    ellipse(width/2, height-20, 20, 20);
}

function mouseMoved() {
    // pmouseX is the previous point the mouse was at
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function mouseDragged() {
    rect(mouseX, mouseY, 10, 10);

}