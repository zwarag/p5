const width = 600
const height = 600
const data = []

function setup() {
  createCanvas(width, height);
  background(55);
}

function mousePressed() {
  const x = map(mouseX, 0, width, 0, 1);
  const y = map(mouseY, 0, height, 1, 0);
  data.push(createVector(x, y));
}

function draw() {
  data.forEach((d) => {
    const x = map(d.x, 0, 1, 0, width);
    const y = map(d.y, 0, 1, height, 0);
    fill(255);
    stroke(255);
    ellipse(x, y, 6, 6);
  })
}