let rows = 4;
let cols = 10;
let bubbles;
let scl;

function setup() {
  let w = min(windowWidth,windowHeight);
  let canvas = createCanvas(w,w);
  canvas.parent("article");
  
  bubbles = createGrid(rows,cols);
  let sclX = width/cols;
  let sclY = height/rows;
  scl = min(sclX,sclY);
  
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      bubbles[i][j] = new Bubble(i,j);
    }
  }
}

function draw() {
  background(200);
  for (let row of bubbles) {
    for (let b of row) {
      b.show();
    }
  }
}