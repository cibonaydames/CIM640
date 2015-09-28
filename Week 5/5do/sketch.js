/*Select a random string from an array of strings.*/
var AnimalSpecies;
var SelectedSpecies;

function setup() {
	createCanvas(windowWidth, windowHeight); 
	AnimalSpecies = ["Dog", "Cat" , "Bird", "Snake", "Rabbit", "Monkey"];
	SelectedSpecies = 0;
}


function draw() {
	background(0);
	fill(255);
	text(AnimalSpecies[0], width/2, height/2);
	text(AnimalSpecies[SelectedSpecies],mouseX, mouseY);

}

function mousePressed() {
	SelectedSpecies = int (random(AnimalSpecies.length));
	
	
}

function keyPressed() {
	AnimalSpecies.push("Dinosaur");
	/*fill(0,255,0)
	AnimalSpecies.push("Sasquach");
	fill(0,0,255)
	AnimalSpecies.push("Lochness Monster")*/
}