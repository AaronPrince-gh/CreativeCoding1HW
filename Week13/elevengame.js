
var charx = 100;
var charY = 100;
var color1 = [];
var color2 = [];
var color3 = [];

var x = 50;
var y = 50;
var diameter = 25;
var xvel;
var yvel;

var myXs = [];
var myYs = [];
var myDiameters = [];
var myXVels = [];
var myYVels = [];

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

var won = false;


var clickx = [];
var clicky = [];
var clickamt;

function setup()
{
    createCanvas(500, 600);
    clickamt = 1;
    shapeXvel = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYvel = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    xvel = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    yvel = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    createChar(200,200);

    for(var i = 0; i < 5; i++)
        {
            color1[i] = Math.random()*255;
            color2[i] = Math.random()*255;
            color3[i] = Math.random()*255;
            myXs[i] = x;
            myYs[i] = y;
            myXVels[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
            myYVels[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
            myDiameters[i] = diameter;
            x += 50;
            y += 50;
            diameter += 25;
        }
    
}
var yaayyyyy = 0;

function draw()
{
    background(yaayyyyy,150, 230);
    yaayyyyy += 10;
    if (yaayyyyy > 255)
        yaayyyyy = 0;
    stroke(0);
    fill(0);
    
    createBorders(10);


    drawChar();
    charMovement();
    genObstacles();
    winCheck();
    genClick();
}


function mouseClicked()
{
    clickx.push(mouseX);
    clicky.push(mouseY);
    fill(0);
    stroke(5);
    textSize(26);
    text("fixed!!!!", width/2-50, height/2-50);
}
function genClick()
{
    fill(120,130,140);
    circle(clickamt*5, charY, 25);

    for(var i = 0; i < clickx.length; i++)
        {
            fill(120,130,140);
            circle(clickx[i], clicky[i], 40);
            if (clickx[i] > 500) {
                clickx[i] = 0;
            }
            clickx[i] += 10;
        }
}

function winCheck()
{
    if(charX > 100 && charY > 300 && charX < 120 && charY < 320)
        {
            won = true;
            fill(0);
            stroke(5);
            textSize(26);
            text("You Win!", width/2-50, height/2-50);
        }
        else {
            fill(0);
            stroke(5);
            textSize(21);
            if (won == false) {
             text("Hide behind that cloud to exit!", width/2-50, height/2-50); }
        }
    
        if (won == true) {
            text("You Win!", width/2-50, height/2-50);
        }
}


function genObstacles()
{
    //circle(shapeX, shapeY, 15)
     shapeXvel = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYvel = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    for(var i = 0; i < myXs.length; i++)
        {
            fill(color1[i], color2[i], color3[i]);
            circle(myXs[i],myYs[i],myDiameters[i]);
            myXs[i] += myXVels[i];
            myYs[i] += myYVels[i];
            if(myXs[i] > width)
            {
                myXs[i] = 0;
            }
            if(myXs[i] < 0)
            {
                myXs[i] = width;
            }
            if(myYs[i] > height)
            {
                myYs[i] = 0;
            }
            if(myYs[i] < 0)
            {
                myYs[i] = height;
            }
        }
    //shapeX += shapeXvel;
    //shapeY += shapeYvel;
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
    if (won == false) {
        fill(40,40,40);
        circle(charX,charY,25); 
    }
}
function createBorders(thickness)
{

    rect(0,0,width,thickness);

    rect(0,0,thickness,height);

    rect(0, height-thickness,width, thickness);

    rect(width-thickness,0,thickness,height);
}


