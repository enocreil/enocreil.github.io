import { Point } from "./Point.mjs";

export class GObject {

  constructor(position = Point.Null(), velocity = Point.Null(), acceleration = Point.Null()) {
    
    if (!(position instanceof Point)) throw "[ERROR] GObject: constructor\n`position` Wong type (`Point`)";
    if (!(velocity instanceof Point)) throw "[ERROR] GObject: constructor\n`velocity` Wong type (`Point`)";
    if (!(acceleration instanceof Point)) throw "[ERROR] GObject: constructor\n`acceleration` Wong type (`Point`)";

    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
  }

  Update(Canvas) {
    this.velocity.Add(Point.Multiply(this.acceleration, Canvas.time.Delta / 1000));
    this.position.Add(Point.Multiply(this.velocity, Canvas.time.Delta / 1000));
  }
}