function createGrid(rows,cols) {
  let grid = Array(rows);
  for (let i = 0; i < rows; i++) {
    grid[i] = Array(cols);
  }
  return grid;
}