var Ball = function() {
  this.x = random(width);
  this.y = random(height);
  this.speedX = random(-1,1);
  this.diameter = random(10,60);
}

var ballColor;

Ball.prototype.show = function() {
  noStroke();
  fill(ballColor.value);
  ellipse(this.x, this.y, this.diameter, this.diameter);
}

Ball.prototype.fall = function() {
  this.y = this.y + 1;
}

var balls = [];


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight); 
  ballColor = document.getElementById('colorSelector');
 canvas.parent('right_panel')
}

function draw() {

  background(0);

  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].fall();
  }

  for (var i = 0; i < balls.length; i++) {
    ellipse(balls[i].x, balls[i].y, balls[i].diameter, balls[i].diameter);
    balls[i].x = balls[i].x + balls[i].speedX;
  }

  if (frameCount%10 == 0 && balls.length < 10000) {
  //  balls.push(new Ball());

  balls.push( new Ball() );
  
  }



}

  
