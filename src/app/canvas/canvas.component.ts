import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  //Array of circles
  circleArray: {radius: number, x: number, y: number, color: string, dx: number, dy: number }[] = [];

  //radius
  radius: number = 30;

  // circle  : Circle = {}

  Circle: any;

  cols = Math.floor(window.innerWidth / 20) + 1;    
  ypos = Array(this.cols).fill(0);


  constructor(private userService: UserService) { }


  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.adaptCanvas();
    this.createCircle(100);

    this.matrix();
    // this.animate();
  }

  onResize(e){
    // console.log("recise event :", e);
    };
  

  mouseMove(e){
    let mouse = {
      x: e.x,
      y: e.y
    }

  // console.log(" event : ",e );
  // console.log(" mouse ", mouse);
}

  matrix() {
    //loop each frame
    requestAnimationFrame(() => this.matrix());
    // this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    // this.loopUpdate();

    let w = this.canvas.nativeElement.width;
    let h = this.canvas.nativeElement.height;

    this.ctx.fillStyle = '#0001';
    this.ctx.fillRect(0, 0, w, h);
    this.ctx.fillStyle = 'rgba(9, 230, 35, 0.76)';
    this.ctx.font = '15pt monospace';

    this.ypos.forEach((y, ind) => {
      // generate a random character
      const text = String.fromCharCode(Math.random() * 128);
      // x coordinate of the column 20px wide.
      const x = ind * 20;
      // render the character at (x, y)
      this.ctx.fillText(text, x, y);
      // randomly reset the end of the column if it's at least 100px high
      if (y > 100 + Math.random() * 10000) this.ypos[ind] = 0;
      // otherwise just move the y coordinate for the column 20px down,
      else this.ypos[ind] = y + 20;
    });

  };


  //adapt canvas size to user's screen
  adaptCanvas() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight - (window.innerHeight * 0.1);
  };

  createCircle(count) {
    for (let i = 0; i < count; i++) {
      this.circleArray[i] = {
        radius: this.randomRadius(),
        x: this.randomXCoordonate(this.randomRadius()),
        y: this.randomYCoordonate(this.randomRadius()),
        dx: this.randomDx(),
        dy: this.randomDy(),
        color: this.randomizeColor(),
        
      }
    }
    console.log(this.circleArray);
  }

  randomRadius(){
    let radius: number = Math.random() * 10;
    // console.log("radius = ", radius);
    return radius;
  }

  randomXCoordonate(radius) {
    let x: number = Math.random() * (this.canvas.nativeElement.width - radius * 2) + radius;
    return x;

  };

  randomYCoordonate(radius) {
    let y: number = Math.random() * (this.canvas.nativeElement.height - radius * 2) + radius;
    return y;
  };

   //vector for x axe
   randomDx() {
    return ((Math.random() - 0.5) * 2);
  };
  //vector for y axe
  randomDy() {
    return ((Math.random() - 0.5) * 2);
  };


  randomizeColor() {
    let randomColor: any = "#" + Math.floor(Math.random() * 16777215).toString(16);
    // console.log("random color = ", randomColor);

    return randomColor;
  };

  animate() {
    //loop each frame
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.loopUpdate();
  };


  loopUpdate(){
  this.circleArray.forEach((element, i) => {
    this.update(i);
  });
}

  draw(i) {
    //clear canvas
    //begin
    this.ctx.beginPath();
    //circle initial position
    this.ctx.arc(this.circleArray[i].x, this.circleArray[i].y, this.circleArray[i].radius, 0, Math.PI * 2, false);
    //fill and colorr inside circle
    this.ctx.fillStyle = this.circleArray[i].color;
    this.ctx.globalAlpha = 0.5;
    this.ctx.fill();
    //color circle edge
    this.ctx.strokeStyle = this.circleArray[i].color;
    //draw
    this.ctx.stroke();
  };


  update(i) {
    //Make buble bounce accorrding to x value
    if (this.circleArray[i].x + this.circleArray[i].radius > this.canvas.nativeElement.width || this.circleArray[i].x - this.circleArray[i].radius < 0) {
      this.circleArray[i].dx = -this.circleArray[i].dx;
    };
    //make the buble bounce according to y value
    if (this.circleArray[i].y + this.circleArray[i].radius > this.canvas.nativeElement.height || this.circleArray[i].y - this.circleArray[i].radius < 0) {
      this.circleArray[i].dy = -this.circleArray[i].dy;
    };
    //position of x next frame
    this.circleArray[i].x += this.circleArray[i].dx;
    //position of y next frame
    this.circleArray[i].y += this.circleArray[i].dy;
    this.draw(i);
    // this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

  }

}
