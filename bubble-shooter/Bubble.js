let colors = [
  color(255,0,0),
  color(0,255,0),
  color(0,0,255)
  ];

class Bubble {
  constructor(i,j) {
    this.i = i;
    this.j = j;
    this.c = random(colors);
  }
  
  show() {
    noStroke();
    fill(this.c);
    ellipseMode(CORNER);
    ellipse(this.j*scl,this.i*scl,scl,scl);
  }
}