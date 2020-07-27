export class Circle {
    
  x: number;
  y: number;
  color:string;
  dx: number;
  dy: number;
  radius :number = 30;

  createCircle(circleArray, canvas){
    for (let i = 0; i < circleArray.lenght; i++) {
      circleArray[i] = { 
        x : this.randomXCoordonate(canvas),
        y : this.randomYCoordonate(canvas),
        dx : this.randomDx(),
        dy : this.randomDy(),
        color : this.randomizeColor()
      } 
    }
    console.log(circleArray);
  }

  randomXCoordonate(canvas){
    let x:number  = Math.random() * (canvas.nativeElement.width - this.radius * 2) + this.radius;
    return x;
  };

  randomYCoordonate(canvas){
    let y:number = Math.random() * (canvas.nativeElement.height - this.radius * 2) + this.radius;
    return y;
  };

  //vector for x axe
  randomDx(){
    return (Math.random() - 1) * 8;
  };
  //vector for y axe
  randomDy(){
    return (Math.random() - 1) * 8;
  };
  
  randomizeColor(){
    let randomColor:any = "#" + Math.floor(Math.random()*16777215).toString(16);
    // console.log("random color = ", randomColor)
    return randomColor;
  };






}



