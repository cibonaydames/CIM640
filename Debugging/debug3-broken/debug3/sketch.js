var Squoo = function(x,y) {
  this.x = x;
  this.y = y;
  this.originX = x;
  this.originY = y;
  this.width = random(3,15);
  this.height = this.width;
  this.fromColor = color(random(255), 0, 0);
  this.toColor = color(0, 0, random(255));
  this.colorAmount = 0;
  this.boxWidth = random(10,20);
  this.boxHeight = this.boxWidth;
  this.directionX = 1;
  this.directionY = 0;

/*  var Squoo = function(x,y) {
  this.x = x;
  this.y = y;
  this.originX = x;
  this.originY = y;
  this.with = random(3,15);
  this.height = this.width;
  this.fromColor = color(random(255), 0, 0)
  this.toColor = coler(0, 0, random(255));
  this.colorAmount = 0;
  this.boxWidth = random(10,20);
  this.boxHeight = this.boxWidth;
  this.directionX = 1;
  this.directionY = 0;*/

this.show = function() {
                var c = lerpColor(this.fromColor, this.toColor, this.colorAmount);
                fill(c);
                rect(this.x, this.y, this.boxWidth, this.boxHeight);
                this.colorAmount += .01;
                
                if (this.colorAmount > 1) {
                  this.colorAmount = 0;
                }

              }

/*    this.shoW = function() {
                var c = lerpCOLOR(this.fromColor, this.toColor, this.colorAmount);
                fill(c);
                rect(this.x, this.y, this.width, this.height);
                this.coloramount += .01;
                
                if (this.colorAmount > 1) {
                  this.colorAmount = 0;
                }

              }    */        

this.move = function() {
                this.x += this.directionX;
                this.y += this.directionY;
                if (this.x >= this.originX + this.boxWidth && this.y <= this.originY) {
                    this.directionX = 0;
                    this.directionY = 1;

                }
                else if (this.x >= this.originX + this.boxWidth && this.y >= this.originY + this.boxHeight) {
                    this.directionX = -1;
                    this.directionY = 0;
                }

                else if (this.x <= this.originX && this.y >= this.originY + this.boxHeight) {
                    this.directionX = 0;
                    this.directionY = -1;
                }

                else if (this.x <= this.originX && this.y <= this.originY) {
                    this.directionX = 1;
                    this.directionY = 0;
                }

              }
}

/* this.move = function() {
                this.x += this.directionX;
                this.y += this.directionY;
                if (x >= originX + boxWidth && y <= originY) {
                    directionX = 0;
                    directionY = 1;

                }
                else if (this.x >= this.originX + this.boxWidth && this.y >= this.originY + this.boxHeight) {
                    directionX = -1;
                    directionY = 0;
                }

                else if (this.x <= this.originX && this.y >= this.originY + this.boxHeight) {
                    directionX = 0;
                    directionY = -1;
                }

                else if (this.x <= this.originX && this.y <= this.originY) {
                    directionX = 1;
                    directonY  = 0;
                }

              }
}*/

var squees = [];

/*var squees = [];*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

/*function setup() 
  createCanvas(windowWidth, windowHeight); 
}*/

function draw() {

  background(0);
  noStroke();

  for (var i = 0; i < squees.length; i++) {
    squees[i].show();
    squees[i].move();
  }

  if (mouseIsPressed) {
    squees.push(new Squoo(mouseX, mouseY));
  }

  if (squees.length > 1000) {
    squees.shift();
  }
  

}

/*function draw() {
  background(0);
  noStroke();

  for (var i = 0; i < squees.length; i++) {
    squees[i].show();
    squees[i].move();
  }

  if (mouseisPressed) {
    squees.push(new Squooo(mouseX, mouseY));
  }

  if (squees.length > 1000) {
    squeez.shift();
  

}*/

