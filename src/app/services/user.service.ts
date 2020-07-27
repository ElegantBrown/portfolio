import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
    console.log("user service works");
    this.getScreenSize();
  }


  getScreenSize(){
    let result: any ={
      width : window.innerWidth,
      height : window.innerHeight
    }
    console.log(result);
    
    return result;
  }

  getMousePosition(){

    

  }


}
