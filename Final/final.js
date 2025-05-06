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
var songplaying;

function touchStarted() {
    getAudioContext().resume();
    if(song.isPlaying()) {
        song.stop(); 
    }
    else {song.play();}
  }

function preload() {
    song = loadSound("worm.mp3");
    songplaying = false;
}

function setup() {
    fill(0);
    createCanvas(2000, 1000);
    rect(0, 0, 2000, 1000);
    updateState();
}

//function mousePressed()// {
    //if(song.isPlaying()) {
       // song.stop(); }
    //else {
       // song.play();
   // }
//}

var timer = 0;
var state = 0;

function draw() {
    //bg
    background(bgcolor[0], bgcolor[1], bgcolor[2])
    stroke(3);
    fill(0);
    createBorders(10);
    //music

    //update
    drawText();
    drawChar();
    charMovement();
    updateProj();
    textSize(35);
    textFont("Courier New");
    text("Click to mute/unmute.", 200, 986);
    if (snowArray.length < 150) {
        append(snowArray, new projectile(Math.floor(Math.random() * 25), Math.floor(Math.random() * 25), Math.floor(Math.random() * 10), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), [255, 255, 255], 100))
    }
    for (i = 0; i < snowArray.length; i++) {
        snowArray[i].display();
    }
    
}

function sleep(millisecondsDuration) {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })}


function updateState() {
    sleep(2000).then(function() {
            state += 1;
            updateState();
    })
}

function drawText() {
    if (state == 1) {
        textFont("Helvetica");
        textSize(20);
    text("the rabbit", 950, 50);
    }
    if (state == 2) {
        textFont("Helvetica");
        textSize(20);
    text("black fur", 950, 50);
    }
    if (state == 3) {
        textFont("Helvetica");
        textSize(20);
    text("white snow", 950, 50);
    }
    if (state == 4) {
        textFont("Helvetica");
        textSize(20);
    text("cold and hungry", 950, 50);
    }
    if (state == 5) {
        textFont("Helvetica");
        textSize(20);
    text("cannot grow", 950, 50);
    }
    if (state == 6) {
        textFont("Helvetica");
        textSize(20);
    text("trotting numbly", 950, 50);
    }
    if (state == 7) {
        textFont("Helvetica");
        textSize(20);
    text("she'd had it,", 950, 50);
    }
    if (state == 8) {
        textFont("Helvetica");
        textSize(20);
    text("golden sun", 950, 50);
    }
    if (state == 9) {
        textFont("Helvetica");
        textSize(20);
    text("pale moon", 950, 50);
    }
    if (state == 10) {
        textFont("Helvetica");
        textSize(20);
    text("now she lacked words", 950, 50);
    }
    if (state == 11) {
        textFont("Helvetica");
        textSize(20);
    text("only dread", 950, 50);
    }
    if (state == 12) {
        textFont("Helvetica");
        textSize(20);
    text("grew here", 950, 50);
    }
    if (state == 13) {
        textFont("Helvetica");
        textSize(20);
    text("not the sun", 950, 50);
    }
    if (state == 14) {
        textFont("Helvetica");
        textSize(20);
    text("nor the moon", 950, 50);
    }
    if (state == 15) {
        textFont("Helvetica");
        textSize(20);
    text("how it hurts", 950, 50);
    speed -= .01;
    }
    if (state == 16) {
        textFont("Helvetica");
        textSize(20);
    text("to be gone", 950, 50);
    speed -= .01;
    }
    if (state == 17) {
        textFont("Helvetica");
        textSize(20);
    text("before you die", 950, 50);
    speed -= .01;
    }
    if (state >= 18) {
        textFont("Helvetica");
        textSize(20);
        text("", 950, 50);
        Wolf();
    }
    if (state >= 20 && (abs(wolfTarget[0]) - charX <= 8) && (abs(wolfTarget[1]) - charY <= 8)) {
            window.open('','_parent','');
            window.close();
    }
}

var wolfTarget = [];

function Wolf() {
    background(0);
    clear();

    wolfChase(charX, charY);
    speed = 2;
}
function wolfChase(x, y) {
    sleep(1200).then(function() {
        fill(100);
        circle(x, y, 50);
        wolfTarget = [x, y];
})
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

var speed = 8;

function charMovement()
{

    if(keyIsDown(w))
    {
        charYVel -= speed;   
    }
    if(keyIsDown(s))
    {
        charYVel += speed;   
    }
    if(keyIsDown(a))
    {
        charXVel -= speed;   
    }
    if(keyIsDown(d))
    {
        charXVel += speed;   
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
    if (charX > 2000) {
        charX = 2000;
    }
    if (charX < 0) {
        charX = 0;
    }
    if (charY > 1000) {
        charY = 1000;
    }
    if (charY < 0) {
        charY = 0;
    }
}