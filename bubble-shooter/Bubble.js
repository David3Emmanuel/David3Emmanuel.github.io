class Bubble {
  constructor(i,j) {
    this.i = i;
    this.j = j;
  }
  
  show() {
    ellipseMode(CORNER);
    ellipse(this.j*scl,this.i*scl,scl,scl);
  }
}