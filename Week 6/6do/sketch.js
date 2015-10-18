var xPoints = [];
var yPoints = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 


  for (var i = +1; i < 100; i++) {
     xPoints.push(random(0,windowWidth));
     yPoints.push(random(0,windowHeight));
  }
}

  /*for (var i = 0; i < xPoints.length(random(width)); i++) {
    xPoints[i]

    for (var j = 0; i < yPoints.length(random(width)); i++) {
    yPoints[i]
  }
}*/

  /*
  for (var x = 0; x<width;x++){
    for(var y = 0; y < height; y++)
    rect(x, y, 1, 1);
  }
  */


function draw() {

  background(0);
  fill(255);

  for (var i = 0; i < xPoints.length; i++) {
/The ellipse is 5 wide 5 tall/
    ellipse(xPoints[i], yPoints[i], 5, 5);

  }

  for (var i = 0; i < xPoints.length; i++) {
    xPoints[i] +=1;

    if(dist(windowWidth, yPoints[i], xPoints[i], yPoints[i]) < 50){
    xPoints[i] = random(0,windowWidth);
  }
}
}