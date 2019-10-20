let starNumber = 500
let stars = []

function preload() {

}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL)
  let i = 0
  while(i < starNumber){
    stars.push(new Star(random(-windowHeight,windowHeight),random(-windowWidth,windowWidth)))
    i++
  }
}

function draw() {
  background(0);
  for(star in stars) {
    stars[star].display()
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

class Star {
  constructor(a,b) {
    this.starSize = 2
    this.z = 0
    this.goalSize = 100
    this.xCoord = b/2
    this.yCoord = a/2
  }

  display(){
    if(this.z < this.goalSize) {
      this.z++ 
    }
  
    if(this.z > this.goalSize) {
      this.z--
    }
  
    if(this.z == this.goalSize && this.goalSize == 100) {
      this.goalSize = 0
    }
  
    if(this.z == this.goalSize && this.goalSize == 0) {
      this.goalSize = 100
    }    
      push()
      translate(this.xCoord,this.yCoord,this.z)
      rotateY(frameCount * 0.005)
      rotateZ(frameCount * 0.005)
      rotateX(frameCount * 0.005)
      normalMaterial()
      sphere(this.starSize,this.starSize)
      pop()
  }
}

function touchMoved() {
  return false
}