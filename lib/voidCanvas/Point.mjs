export class Point{
  /**
   * @type {number}
   */
  //x;
  /**
   * @type {number}
   */
  //y;

  /**
   * @param x {number} the x coordinate
   * @param y number the y coordinate 
   */
  constructor (x, y) {
    if (typeof x !== "number") throw "[ERROR] Point: constructor\n`x` Wong type (`number`)";
    if (typeof y !== "number") throw "[ERROR] Point: constructor\n`y` Wong type (`number`)";
    
    this.x = x;
    this.y = y;
  }

  /**
   * @param point1 {Point} fist point
   * @param point2 {Point} second point
   */
  static Distance(point1, point2) {
    if (!(point1 instanceof Point)) throw "[ERROR] Point: Distance\n`point1` Wong type (`Point`)";
    if (!(point2 instanceof Point)) throw "[ERROR] Point: Distance\n`paren2` Wong type (`Point`)";

    let x = point2.x - point1.x;
    let y = point2.y - point1.y;
    return Math.sqrt(x*x + y*y);
  }
  static Null(){
    return new Point(0 , 0);
  }

  static Add(point1, point2){
    if (!(point1 instanceof Point)) throw "[ERROR] Point: Add\n`point1` Wong type (`Point`)";
    if (!(point2 instanceof Point)) throw "[ERROR] Point: Add\n`paren2` Wong type (`Point`)";

    return new Point(point1.x + point2.x, point1.y + point2.y);
  }

  Add(point) {
    if (!(point instanceof Point)) throw "[ERROR] Point: Add\n`point` Wong type (`Point`)";

    this.x += point.x;
    this.y += point.y;
  }

  static Multiply (point, x){
    if (!(point instanceof Point)) throw "[ERROR] Point: Multiply\n`point1` Wong type (`Point`)";
    if (typeof x !== "number") throw "[ERROR] Point: Multiply\n`x` Wong type (`number`)";
    return new Point(point.x * x, point.y * x);
  }

  Multiply (x) {
    if (typeof x !== "number") throw "[ERROR] Point: Multiply\n`x` Wong type (`number`)";

    this.x *= x;
    this.y *= x;
  }
}