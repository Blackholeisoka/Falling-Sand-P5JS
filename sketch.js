let grid = [];
let sizing = 10;
let rows, columns;

function setup() {
  createCanvas(400, 400);
  rows = width / sizing;
  columns = height / sizing;

  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < columns; j++) {
      grid[i][j] = 0; 
    }
  }
}

function draw() {
  background(220);
  applyGravity();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] > 0) {
        fill(0); 
        noStroke();
        rect(i * sizing, j * sizing, sizing, sizing); 
      }
    }
  }
}

function mouseDragged() {
  let x = floor(mouseX / sizing);
  let y = floor(mouseY / sizing);
  x = constrain(x, 0, rows - 1);
  y = constrain(y, 0, columns - 1);

  if (grid[x][y] === 0) {
    grid[x][y] = 1;
  }
}

function applyGravity() {
  for (let j = columns - 2; j >= 0; j--) {
    for (let i = 0; i < rows; i++) {
      if (grid[i][j] > 0) {
        if (grid[i][j + 1] === 0) {
          grid[i][j + 1] = grid[i][j];
          grid[i][j] = 0;

        } else if (i + 1 < rows && grid[i + 1][j] === 0 && grid[i + 1][j + 1] === 0) {
          grid[i + 1][j + 1] = grid[i][j];
          grid[i][j] = 0;

        } else if (i - 1 >= 0 && grid[i - 1][j] === 0 && grid[i - 1][j + 1] === 0) {
          grid[i - 1][j + 1] = grid[i][j];
          grid[i][j] = 0;
        }
      }
    }
  }
}
