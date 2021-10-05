class Shooter {
  constructor() {
    this.pos = createVector(width/2,height);
    this.dir = 0;
    this.w = 25;
    this.h = 75;
  }
  
  update() {
    let mouse = createVector(mouseX,mouseY);
    mouse.sub(this.pos);
    this.dir = mouse.heading();
  }
  
  show() {
    stroke(55);
    fill(100);
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.dir);
    rect(-10,-this.w/2,this.h,this.w);
    pop();
  }
}