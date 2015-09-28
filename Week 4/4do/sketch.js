/*xShow a set of shapes based on a conditional 
statement using the mouse coordinates.*/


function setup() {
	createCanvas(windowWidth, windowHeight);
	y =	(width/2, height/2)
	x = ((width/4) + 25, height/4)
}

function draw() {
	background(50);

	/|| is or/
	if (mouseY < width/2) {
		fill(255,0,0)
		ellipse(x, y, mouseX, mouseY);	
					
	}

	if (mouseX > width/2) {
		fill(0,255,0)
		rect(x, y, mouseX, mouseY);
		
	}

	if (mouseY > height/2) {
		fill(0,0,255)
		rect(x, y, mouseX, mouseY);
		
	}

	if (mouseY > (height/2) + 25) {
			fill(0,255,255)
			 rect(x, y, mouseX, mouseY);
			 stroke(50); 
				
					
	}
}