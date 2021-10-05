class Ball {
  constructor() {
    this.r = scl/2;
    this.visible = false;
    this.pos = createVector();
    this.vel = createVector();
    this.speed = 5;
  }
  releaseFrom(shooter) {
    if (!this.visible) {
    this.visible = true;
    this.pos = shooter.pos.copy();
    this.vel = p5.Vector.fromAngle(shooter.dir);
    this.vel.mult(this.speed);
    }
  }
  update() {
    this.pos.add(this.vel);
    this.checkEdges();
  }
  checkEdges() {
    if (this.pos.x <= this.r) {
      this.vel.x = abs(this.vel.x);
    } else if (this.pos.x >= width-this.r) {
      this.vel.x = -abs(this.vel.x);
    }
    
    if (this.pos.y <= -this.r) {
      this.visible = false;
    }
  }
  show() {
    fill(255);
    if (this.visible) {
      ellipseMode(CENTER);
      ellipse(this.pos.x,this.pos.y,this.r,this.r);
    }
  }
}