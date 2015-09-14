
function setup() {
  createCanvas(640, 640);
  background('#bada55');
}

function draw() {
  var c = color(249, 255, 148, 50);
  fill(c);
  stroke ('##ffff90');
  strokeWeight (1);
  triangle(50, 50, 50, 50, 25, 25);
  triangle(mouseX, mouseY, 0, 0, 25, 25)
}

function mousePressed() {
       changeSize();
     }

function randomLetterFromText(text) {
  var letterNumber = random(text.length);
  var letter = text.charAt(letterNumber);
  return letter;
}

function changeSize() {
  ellipse(width/2, height/2, 50,50);
}