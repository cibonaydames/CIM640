var dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 

/random is between those two variables/

  while(dots.length < 10) {
    dots.push(random(10,50));
  }

}

function draw() {

  background(0);
  noFill();
  stroke(255,255,255);
  var tenth = height/10;

  var i = 0;

  while (i < dots.length) {
    ellipse(width/2, i * tenth, dots[i], dots[i]);
    i = i + 1;
  }

}