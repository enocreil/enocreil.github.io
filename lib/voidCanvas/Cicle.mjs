import { GObject } from "./Object.mjs";

export class Cicle extends GObject {
  constructor(r,col, pos, speed) {
    super(pos, speed)
    this.r = r;
    this.col = col;
  }

  Draw(ctx){

  }

  Update(Canvas) {
    function mod(x, y) {
      let mod = x % y;
      if (mod < 0) mod += y;
      return mod;      
    }
    super.Update(Canvas);
    this.position.y = mod(this.position.y + this.r, Canvas.canvas.height / Canvas.unit + 2 * this.r) - this.r;
    this.position.x = mod(this.position.x + this.r, Canvas.canvas.width / Canvas.unit  + 2 * this.r) - this.r    
  }

  Draw(Canvas) {
    let prev = Canvas.ctx.fillStyle;
    Canvas.ctx.fillStyle = this.col;
    Canvas.DrawCicle( this.position.x, this.position.y, this.r, true, false);
    Canvas.ctx.fillStyle = prev;
  }
}