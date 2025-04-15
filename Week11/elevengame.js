
var charx = 100;
var charY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 50;
var shapeY = 60;
var shapeXvel;
var shapeYvel;

var obs1ShapeX = 100;
var obs1ShapeY = 200;
var obs2ShapeX;
var obs2ShapeY;
var obs1Shapevel;
var obs2Shapevel;

var clickShapeX;
var clickShapeY;
function setup()
{
    createCanvas(500, 600);

    shapeXvel = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYvel = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    createChar(200,200);
}

function draw()
{
    background(60,150,60);
    stroke(0);
    fill(0);
    
    createBorders(10);


    drawChar();
    charMovement();
    circle(shapeX, shapeY, 15)
     shapeXvel = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYvel = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX += shapeXvel;
    shapeY += shapeYvel;
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    fill(255, 255, 0)
    circle(obs1ShapeX, obs1ShapeY, 20)
    obs1ShapeX += shapeXvel;
    obs1ShapeY += shapeYvel;
    if(obs1ShapeX > width)
    {
        obs1ShapeX = 0;
    }
    if(obs1ShapeX < 0)
    {
        obs1ShapeX = width;
    }
    if(obs1ShapeY > height)
    {
        obs1ShapeY = 0;
    }
    if(obs1ShapeY < 0)
    {
        obs1ShapeY = height;
    }

    fill(255, 255, 255);
    circle(110, 310, 35);
    if(charX > 100 && charY > 300 && charX < 120 && charY < 320)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
    else {
        fill(0);
        stroke(5);
        textSize(21);
        text("Hide behind that cloud to exit!", width/2-50, height/2-50);
    }


    fill(120,130,140);
    circle(clickShapeX, clickShapeY, 25);
}

function charMovement()
{

    if(keyIsDown(w))
    {
        charY -= 5;   
    }
    if(keyIsDown(s))
    {
        charY += 5;   
    }
    if(keyIsDown(a))
    {
        charX -= 5;   
    }
    if(keyIsDown(d))
    {
        charX += 5;   
    }
}
function createChar(x,y)
{
    charX = x;
    charY = y;
}

function drawChar()
{
    fill(40,40,40);
    circle(charX,charY,25);
}
function createBorders(thickness)
{

    rect(0,0,width,thickness);

    rect(0,0,thickness,height);

    rect(0, height-thickness,width, thickness);

    rect(width-thickness,0,thickness,height);
}

function mouseClicked()
{
    clickShapeX = mouseX;
    clickShapeY = mouseY;
}
