import { Cube } from "./objects.js";
import { ctx, canvas } from "./settings.js";

let user = new Cube(canvas.width / 2, canvas.height / 2, 10, 10, "white");

// * draw function
function draw() {
  ctx.clear();
  user.draw();
}

// * update function
function update(progress) {
  user.move(progress / 8)
}

// * loop function
function loop(timestamp) {
  let progress = timestamp - lastRender;

  update(progress);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}
let lastRender = 0;
window.requestAnimationFrame(loop);

function keydown({ keyCode }) {
  if (keyCode in user.keys) {
    let key = user.keys[keyCode]
    user.pressedKeys[key] = true
  }
}
function keyup({ keyCode }) {
  if (keyCode in user.keys) {
    let key = user.keys[keyCode]
    user.pressedKeys[key] = false
  }
}
window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false)