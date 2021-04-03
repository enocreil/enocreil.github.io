export class A_Canvas {
  /**
   * @type {HTMLCanvasElement}
   */
  //canvas;

  /**
   * @type {CanvasRenderingContext2D}
   */
  //ctx;

  /**
   * @param parent {HTMLElement} the parent of the canvas
   */
  constructor (parent, framerate = 60) {
    if (!(parent instanceof HTMLElement)) throw "[ERROR] A_Canvas: constructor\n`parent` Wong type (`HTMLElement`)";
    if (typeof framerate !== "number") throw "[ERROR] A_Canvas: constructor\n`framerate` Wong type (`number`)";
    
    this.canvas = document.createElement("canvas");// create/definit canvas
     //canvas config

    this.canvas.onload = this.AutoResize();

    parent.appendChild(this.canvas);// attache/display it to his `patent`

    this.canvas.id = "canvas";
    this.unit = 1;
    this.time ={
      init: new Date(),
      start: undefined,
      last: undefined,
      time: 0,
      Delta: 0,
    };
    this.framerate = framerate;
    this.ctx = this.canvas.getContext("2d");// get the context
    this.backgroundColor = "#fff";
    window.addEventListener("resize", event => {
      this.AutoResize();
    })
    this.AutoResize();
    this.Start();
  }

  Draw(){}

  AutoResize() {
        // Lookup the size the browser is displaying the canvas.
    var displayWidth  = this.canvas.clientWidth;
    var displayHeight = this.canvas.clientHeight;
  
    // Check if the canvas is not the same size.
    if (this.canvas.width  != displayWidth ||
      this.canvas.height != displayHeight) {
  
      // Make the canvas the same size
      this.canvas.width  = displayWidth;
      this.canvas.height = displayHeight;
    }
  }
  
  DrawCicle(x, y, radius, fill= false, stroke = true){
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x * this.unit, y * this.unit, radius * this.unit, 0, 2 * Math.PI);
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  DrawRect(x, y, width, height, fill= false, stroke = true){
    let ctx = this.ctx;
    if (fill) ctx.fillRect(x * this.unit, y * this.unit, width * this.unit, height * this.unit);
    if (stroke) ctx.strokeRect(x * this.unit, y * this.unit, width * this.unit, height * this.unit);
  }
  
  ClearColor(){
    let prev = this.ctx.fillStyle;
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = prev;
  }

  Clear(alpha = 1) {
    let apha = this.ctx.globalAlpha;
    this.ctx.globalAlpha = alpha;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalAlpha = apha;
  }

  Start(){
    this.time.start = new Date();
    this.time.last = new Date();
    this.time.time = 0;
    this.animation = setInterval(() => {
      this.UpdateTime();      
      this.Draw();
    }, 1/ this.framerate);
  }

  Stop(){
    clearInterval(this.animation);
    this.time.start = undefined;
    this.time.last = undefined;
    this.time.time = undefined;
    this.time.Delta = undefined;
  }

  UpdateTime() {
    let now  = new Date();
    this.time.Delta = now.getTime() - this.time.last.getTime();
    this.time.time = now.getTime() - this.time.start.getTime();
    this.time.last = now;
  }
 
}


