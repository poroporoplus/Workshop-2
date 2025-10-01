let flower;

function preload()
{
	flower = loadImage("flower.gif");
}

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
!background(255,0,0);
image(flower,windowHeight,windowWidth);
}
