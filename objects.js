import { ctx } from "./settings.js";

export class Cube {
  constructor(x, y, width, height, color, keys = { r: 68, l: 65, u: 87, d: 83 }) {
    this.pos = { x: x, y: y };
    this.width = width;
    this.height = height;
    this.color = color;
    this.keys = {
      [keys.r]: "right",
      [keys.l]: "left",
      [keys.u]: "up",
      [keys.d]: "down"
    };
    this.pressedKeys = {
      left: false,
      right: false,
      up: false,
      down: false
    }
  }

  move(p) {
    if (this.pressedKeys.left) { this.pos.x -= p }
    if (this.pressedKeys.right) { this.pos.x += p }
    if (this.pressedKeys.up) { this.pos.y -= p }
    if (this.pressedKeys.down) { this.pos.y += p }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}
