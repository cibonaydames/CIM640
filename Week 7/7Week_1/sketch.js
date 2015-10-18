
var ball = { 	x: 50,
				y: 50,
				diameter: 50
			};


function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);
  fill(255,0,0);
  stroke(0,255,0);
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
  ball.x = ball.x + 1;
  ball.y = ball.y + 1;
}


var ball = { 	x: 50,
				y: 50,
				diameter: 50
			};


function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);
  fill(255,0,0);
  stroke(0,255,0);
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
  ball.x = ball.x + 1;
  ball.y = ball.y + 1;
}
