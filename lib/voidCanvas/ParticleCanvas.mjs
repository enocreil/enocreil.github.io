import { A_Canvas } from "./A_Canvas.mjs";
import { Point } from "./Point.mjs";
import { Cicle } from "./Cicle.mjs";

export class ParticleCanvas extends A_Canvas {

  constructor(parent, backgroundColor = "#fff") {
    super(parent);
    this.p = [];
    this.ratio = 0.0001
    if (typeof backgroundColor !== "string") throw "[ERROR] ParticleCanvas: constructor\n`backgroundColor` Wong type (`String`)";

    this.backgroundColor = backgroundColor;
    this.unit = 100;

    this.AutoResize();

  }

  AutoResize() {
    super.AutoResize();
    if (this.p === undefined) return;
    let nb = this.canvas.width * this.canvas.height * this.ratio;
    while (this.p.length > nb) {
      this.p.pop();
    }
    while (this.p.length < nb) {
      this.p.push(this.GerateCicle());
    }
    this.p.forEach(point => {
      point.position.x =  Math.random()* this.canvas.width / this.unit;
      point.position.y =  Math.random()* this.canvas.height / this.unit;
    });
  }

  RandomSign() {
    return 2 * (Math.random() - 0.5); 
  }
  GerateCicle() {
      let r = -Math.random()*0.1+0.17;
      let a = Math.random()*0.2 ;
      let x = Math.random()* this.canvas.width/this.unit;
      let y = Math.random()* this.canvas.height/this.unit;
      let vx = this.RandomSign()* 1;
      let vy = this.RandomSign()* 1;
      return new Cicle(r, `rgba(241, 241, 65, 0.7)`, new Point(x, y),new Point(vx, vy)); /*couleur bubble*/
      //return new Cicle(r, `rgba(100, 100, 100, ${a})` , new Point(x, y),new Point(vx, vy)); /*couleur bubble*/

  }


  Draw(){
    this.Clear();

    this.p.forEach(pp => {
      pp.Update(this);
      pp.Draw(this);
    });

  }

}