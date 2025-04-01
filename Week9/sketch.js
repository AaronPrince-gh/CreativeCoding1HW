function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    background(120,300,78);
    textSize(15);
    textFont("Courier New");
    text("Cities Will Burn", 400, 90);

    // Noggin
    fill(160, 140, 120);
    circle(250,100, 150);
   
    // Schnozer
    line(247,90, 252, 90);
    
    // Lookers
    fill(255, 0, 0);
    strokeWeight(0);
    triangle(200,75,205,80,200,95);
    triangle(300,75,295,80,300,95);
    strokeWeight(10);

    // Facehole
    fill(255, 0, 0);
    ellipse(250, 132, 30, 60);

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
    fill(160, 140, 120);
    rect(210,185,85,150);
    //pants
    fill(255);
    rect(210, 320, 85, 70);
    // limbs
    fill(10, 24, 120);
    rect(300,195,50,10);
    rect(150,195,50,10);
    rect(225,335,10,50);
    rect(270,335,10,50);
    
    fill(120);
    textSize(20);
    text("Aaron 'The Annihilator' Prince", 50, 550 );


}