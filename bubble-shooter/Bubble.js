class Bubble {
  constructor(i,j) {
    this.i = i;
    this.j = j;
    this.c = random(bubbleColors);
  }
  
  show() {
    stroke(brightness(this.c));
    fill(this.c);
    ellipseMode(CORNER);
    ellipse(this.j*scl,this.i*scl,scl,scl);
    noStroke();
    fill(255,150);
    ellipseMode(CENTER);
    ellipse(this.j*scl+3*scl/4,this.i*scl+scl/4,scl/5,scl/5);
  }
}