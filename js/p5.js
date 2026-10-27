let x = 0;
let y = 0;
let friction = 0.01;

function setup (){
 createCanvas(windowWidth,windowHeight);
 background(0);
}

function windowResized (){
resizeCanvas(windowWidth, windowHeight);
background(0);
}

function draw (){
    let time = millis() * 0.001;
    let size = 50 + 30 * sin(time);
    let r = sin(time) * 127 + 128;
    let g = sin(time + PI / 3) * 127 + 128;
    let b = sin(time + (2 * PI) / 3) * 127 + 128;

    background(0, 10);
    noStroke();
    // ellipse (x, y, width, height); fill (255); noStroke (); square(x, y, 50, 50);random(255);
    stroke(r, g, b);
    fill(0);
    strokeWeight(10);
    x += (mouseX - x) * friction;
    y += (mouseY - y) * friction;
    ellipse(x, y, size);

}