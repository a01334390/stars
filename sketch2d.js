function setup(){
    createCanvas(windowWidth,windowHeight)
}

function draw() {
    fill(0,10)
    rect(0,0,windowWidth,windowHeight)
    fill(255)
    noStroke()
    ellipse(random(windowWidth), random(windowHeight), 2,2)
}