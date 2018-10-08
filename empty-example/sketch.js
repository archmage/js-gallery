function setup() {
  createCanvas(displayWidth, displayHeight);
  background('#ffaadd')
}

function draw() {
  clear() 
  ellipse(mouseX, mouseY, 80, 80);

  // ellipse(windowWidth / 2, windowHeight / 2, 80, 80)
}