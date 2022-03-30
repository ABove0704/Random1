let X = 200; 
let Y = 200;

function setup () {
	createCanvas (windowHeight,windowWidth);
}

function draw () {
  
    background (60);
    rectMode(CORNER);
	rect(550, mouseX, 150, 150);
	fill (0);
	stroke (100, 150, 255)
	strokeWeight(5);
    rect(mouseX, mouseY, mouseX, 150);
    rect(250, mouseY, 150, 150);
    rect(100, 150, mouseX, 150); 
    triangle(30, 40, mouseX, 50, 150, 75);
    square (150,mouseX,50,25)
    
    X = X + 1;
  
    circle (mouseX, mouseY, 24);
    fill (255);
  
    ellipse(mouseX, 150, 150, 150);
    fill(0);
    ellipse(400, 150, 150, 150);
    ellipse(250, 150, 150, 150);
    ellipse(100, 150, 150, 150);
    fill(0)
	Y = Y + 1;    
}

function mousePressed () {
  fill (255,150);
  noStroke();
  ellipse (mouseX,mouseY,60,60);
}