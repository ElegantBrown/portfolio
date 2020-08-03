import { Component, ViewChild } from '@angular/core';
import {SlickCarouselComponent} from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  @ViewChild('slickModal', {static:true})
	slickModal: SlickCarouselComponent;

  windowTest = window;

  onResize(e){
  // console.log(e);
  // window.location.reload();
  };


  updateOrientation()
  {
      let displayStr = "Orientation : ";

      switch(window.orientation)
      {
          case 0:
              displayStr += "Portrait";
          break;

          case -90:
              displayStr += "Landscape (right, screen turned clockwise)";
          break;

          case 90:
              displayStr += "Landscape (left, screen turned counterclockwise)";
          break;

          case 180:
              displayStr += "Portrait (upside-down portrait)";
          break;

      }
      // document.getElementById("output").innerHTML = displayStr;
      console.log(displayStr);
      
  }

}
