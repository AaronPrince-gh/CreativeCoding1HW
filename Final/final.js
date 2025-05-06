//canvas
var bgcolor = [200, 250, 255];

//player character [X/Y IS CASE SENSITIVE!!!]
var charX = 1000;
var charY = 500;
var charXVel = 0;
var charYVel = 0;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var spacebar = 32;
var snowArray = [];


//projectile
class projectile {
    constructor(x, y, d, xVel, yVel, color, life) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.xVel = xVel;
        this.yVel = yVel;
        this.color = color;
        this.color = [];
        this.life = life;
    }
    display() {
        fill(255);
       // fill(this.color[0], this.color[1], this.color[2]);
        circle(this.x, this.y, this.d);
    }
}

let song;

function touchStarted() {
    getAudioContext().resume();
    song = loadSound('https://apo.mp3');
    song.play();
  }

function preload() {
}

function setup() {
    createCanvas(2000, 1000);
}

//function mousePressed()// {
    //if(song.isPlaying()) {
       // song.stop(); }
    //else {
       // song.play();
   // }
//}

function draw() {
    //bg
    background(bgcolor[0], bgcolor[1], bgcolor[2])
    stroke(3);
    fill(0);
    createBorders(10);
    //music

    //update
    drawChar();
    charMovement();
    updateProj();
    if (snowArray.length < 150) {
        append(snowArray, new projectile(Math.floor(Math.random() * 25), Math.floor(Math.random() * 25), Math.floor(Math.random() * 10), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), [255, 255, 255], 100))
    }
    for (i = 0; i < snowArray.length; i++) {
        snowArray[i].display();
    }
    
}

function updateProj() {
    for (i = 0; i < snowArray.length; i++) {
        snowArray[i].x += snowArray[i].xVel;
        if (abs(snowArray[i].x) >= 1990 || snowArray[i].x < 0) {
            //snowArray[i].xVel *= -1;
            snowArray[i].x -= 1990;
        }
        snowArray[i].y += snowArray[i].yVel;
        if (abs(snowArray[i].y) >= 990 || snowArray[i].y < 0) {
            //snowArray[i].yVel *= -1;
            snowArray[i].y -= 990;
        }
        snowArray[i].life -= 0;
        if (snowArray[i].life <= 0) {

        }
    }
}

function createBorders(thickness)
{

    rect(0,0,width,thickness);

    rect(0,0,thickness,height);

    rect(0, height-thickness,width, thickness);

    rect(width-thickness,0,thickness,height);
}

function createParticle() {
    new projectile(25, 25, 25, 5, 5, [255, 0, 255])
}

function drawChar() {
        fill(40,40,40);
        circle(charX,charY,25);
}

function charMovement()
{

    if(keyIsDown(w))
    {
        charYVel -= 8;   
    }
    if(keyIsDown(s))
    {
        charYVel += 8;   
    }
    if(keyIsDown(a))
    {
        charXVel -= 8;   
    }
    if(keyIsDown(d))
    {
        charXVel += 8;   
    }
    if (abs(charXVel) + abs(charYVel) > 8){
        charX += charXVel*.71;
        charY += charYVel*.71;
    }
    else {
        charX += charXVel;
        charY += charYVel;
    }
    charXVel = 0;
    charYVel = 0;
}