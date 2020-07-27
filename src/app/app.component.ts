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

  onResize(e){
  // console.log(e);
  window.location.reload();
  };

}
