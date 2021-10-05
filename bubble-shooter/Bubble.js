class Bubble {
  constructor(i,j) {
    this.i = i;
    this.j = j;
    this.c = color(random(255),random(255),random(255));
  }
  
  show() {
    noStroke();
    fill(this.c);
    ellipseMode(CORNER);
    ellipse(this.j*scl,this.i*scl,scl,scl);
  }
}