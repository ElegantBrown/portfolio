import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal: ElementRef;

  hover:boolean =false;
  temp:any;
  slickModal: SlickCarouselComponent;


  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    // "nextArrow": "<div class='nav-btn next-slide'> NEXT </div>",
    // "prevArrow": "<div class='nav-btn prev-slide'> PREV </div>",
    "dots": false,
    "infinite": true
  };
  // test = this.learnMore.nativeElement;

  arrayProject:any[] = [
    {
      name: "winnr.gg",
      show : false,
      modal : false,
      tech : "Angular / TypeScript",
      mozImg : "./../../assets/testeee.png",
      img : [
          "./../../assets/testeee.png",
          "./../../assets/testeee.png",
          "./../../assets/testeee.png",
      ],
    },
    {
      name: "Herd Book Les Charolais",
      show : false,
      modal : false,
      tech : "Angular / TypeScript",
      mozImg : "./../../assets/testeee.png",
      img : [
          "linkForImg1_1",
          "linkForImg2_1",
          "linkForImg3_1",
      ],
    },
    {
      name: "Utopia Script",
      show : false,
      modal : false,
      tech : "Angular / TypeScript",
      mozImg : "./../../assets/testeee.png",
      img : [
          "linkForImg1_1",
          "linkForImg2_1",
          "linkForImg3_1",
      ],
    },
  ];

  indexMouseEnter:number = 0;
  indexMouseOut:number = 0;

  constructor( private renderer: Renderer2) { }

  ngOnInit() {
// console.log('project ',this.project);
// console.log('project ',this.sectionProject);
  
  };
  ngAfterViewInit() {
    // const toto = this.learnMore;
    // const tata = this.singleProject;
    // console.log("toto", toto, "tata", tata);
    // const first = this.singleProject.first;
  };

  //---------------------------------------------------------
  //modal
  //---------------------------------------------------------

  openModal(i){ 
    this.arrayProject[i].modal = true;
    this.arrayProject[i].show = false;
    this.modal.nativeElement.style.display = "block";
    this.modal.nativeElement.style.animation = "zoomIn 0.40s";

    console.log("this.slickModal 1 =", this.slickModal);
    
    // this.slickModal.slickGoTo(0);
    console.log("this.slickModal 2 = ",this.slickModal);
    
    // this.slickInit(this.temp);
  };

  closeModal(){
    this.modal.nativeElement.style.animation = "zoomOut 0.2s";
    setTimeout( () => this.modal.nativeElement.style.display = "none", 200 )
  };

  mouseEnter(i){    
    this.arrayProject[i].img[0].show = !this.arrayProject[i].img[0].show;
    this.indexMouseEnter ++;   
  };

  mouseOut(i){
    this.arrayProject[i].img[0].show = !this.arrayProject[i].img[0].show;
    this.indexMouseOut ++; 
  };
  //---------------------------------------------------------
  //---------------------------------------------------------


  //---------------------------------------------------------
  //slick
  //---------------------------------------------------------
  addSlide() {
    // this.slides.push(488)
  };

  removeSlide() {
    // this.slides.length = this.slides.length - 1;
  };

  slickInit(e) {
    console.log('slick initialized , event = ', e);
  };

  breakpoint(e) {
    console.log('breakpoint');
  };

  afterChange(e) {
    console.log('afterChange, event :', e);
  };

  beforeChange(e) {
    console.log('beforeChange event :', e);
  };

  next(){

  };

  prev(){

  };
  //---------------------------------------------------------
  //---------------------------------------------------------



}
