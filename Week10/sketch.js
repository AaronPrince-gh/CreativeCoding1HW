var headX;
var headY;
var headVel;
var headSize;
var headSizeVel;

var bodyX;
var bodyY;
var bodyVel;

var pantsX;
var pantsY;
var pantsVel;

var noseX;
var noseY;
var noseVel;

var mouthX;
var mouthY;
var mouthXVel;
var mouthYVel;

var nameSize;
var nameScaleVel;
var nameX;
var nameY;
var nameXVel;
var NameYVel;


function setup()
{
    createCanvas(600, 600);
    headX = 250;
    headY = 100;
    headVel = floor(random() * 10)
    headSize = 150;
    headSizeVel = 10;
    headColor1 = 255;
    headColor2 = 0;
    headColor3 = 0;


    bodyX = 210;
    bodyY = 185;
    bodyVel = floor(random() * 10)
    bodyColor1 = 160;
    bodyColor2 = 140;
    bodyColor3 = 120;

    pantsX = 210;
    pantsY = 320;
    pantsVel = floor(random() * 10)
    pantsColor = 255;

    noseX = 247;
    noseY = 90;
    noseVel = floor(random() * 10)

    mouthX = 250;
    mouthY = 132;
    mouthVelX = floor(random() * 10)
    mouthVelY = floor(random()* 10)
    mouthColor = 255;

    nameScale = 20;
    nameScaleVel = 5;
    nameX = 0;
    nameY = 500;
    nameXVel = 0;
    nameYVel = -10;

    
}

function draw()
{
    background(120,300,78);
    textSize(35);
    textFont("Courier New");
    text("Cities Will Burn", 200, 120);

    // Noggin
    fill(headColor1, headColor2, headColor3);
    circle(headX, 100, headSize);
    if (headX >= 600 || headX <= 0) {
        headVel *= -1;
        headColor1 = floor(random() * 255);
        headColor2 = floor(random() * 255);
        headColor3 = floor(random() * 255);
    }
    if (headSize >= 200 || headSize <= 50) {
        headSizeVel *= -1;
    }
    headSize += headSizeVel;
    headX += headVel;
   
    // Schnozer
    line(noseX-3,90, noseX+3, 90);
    if (noseX >= 600 || noseX <= 0) {
        noseVel *= -1;
    }
    noseX += noseVel;
    
    // Lookers
    fill(255, 0, 0);
    strokeWeight(0);
    triangle(200,75,205,80,200,95);
    triangle(300,75,295,80,300,95);
    strokeWeight(10);

    // Facehole
    fill(mouthColor, 0, 0);
    ellipse(mouthX, mouthY, 30, 60);
    if (mouthX >= 600 || mouthX <= 0) {
        mouthVelX *= -1;
        mouthColor = floor(random() * 255);
    }
    if (mouthY >= 600 || mouthY <= 0) {
        mouthVelY *= -1;
        mouthColor = floor(random() * 255);
    }
    mouthX += mouthVelX;
    mouthY += mouthVelY;

    // The Mop
    fill(0);
    circle(200, 50, 30);
    circle(190, 60, 30);
    circle(220, 45, 40);
    circle(250, 50, 60);
    circle(280, 60, 30);
    circle(285, 50, 40);
    circle(250, 30, 90);
    circle(220, 33, 60);
    circle(280, 35, 55);

    // Hot Bod
    fill(bodyColor1, bodyColor2, bodyColor3);
    rect(210,bodyY,85,150);
    if (bodyY >= 600 || bodyY <= 0) {
        bodyVel *= -1;
        bodyColor1 = floor(random() * 255);
        bodyColor2 = floor(random() * 255);
        bodyColor3 = floor(random() * 255);
    }
    bodyY += bodyVel;
    //pants
    fill(pantsColor);
    rect(210, pantsY, 85, 70);
    if (pantsY >= 600 || pantsY <= 0) {
        pantsVel *= -1;
        pantsColor = floor(random() * 255);
    }
    pantsY += pantsVel;
    // limbs
    fill(10, 24, 120);
    rect(300,195,50,10);
    rect(150,195,50,10);
    rect(225,335,10,50);
    rect(270,335,10,50);
    
    fill(120);
    textSize(nameScale);
    // 50, 550
    text("Aaron 'The Annihilator' Prince", nameX, nameY);
    if (nameScale >= 30 || nameScale <= 5) {
        nameScaleVel *= -1;
    }
    nameScale += nameScaleVel;
    if (nameX <= 0 && nameY == 500) {
        nameX = 0; nameXVel = 0; nameYVel = 10;
    }
    if (nameX == 0 && nameY >= 600) {
        nameY = 600; nameXVel = 10; nameYVel = 0;
    }
    if (nameX >= 100 && nameY == 600) {
        nameX = 100; nameXVel = 0; nameYVel = -10;
    }
    if (nameX == 100 && nameY <= 500) {
        nameY = 500; nameXVel = -10; nameYVel = 0;
    }
    nameX += nameXVel;
    nameY += nameYVel;


}