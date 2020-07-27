import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('emailInput', { static: true }) emailInput: ElementRef;
  @ViewChild('msgInput', { static: true }) msgInput: ElementRef;

  msgSend:boolean = false;
  placeHolderName:string;
  placeHolderEmail:string;
  placeHolderText:string;

  constructor() { }

  ngOnInit() {
    this.nameInput.nativeElement.style.border="solid 1px black"
    this.placeHolderName = "Name";
    this.emailInput.nativeElement.style.border="solid 1px black"
    this.placeHolderEmail = "Email";
    this.msgInput.nativeElement.style.border="solid 1px black";
    this.placeHolderText = "Enter your message";
  }

  myForm = new FormGroup({
    name : new FormControl(null, Validators.required),
    email : new FormControl(null,[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    msg : new FormControl(null, Validators.required)
  });
  


  doSubmit(){
    console.log("myForm : ",this.myForm, "status : ", this.myForm.status);
    switch (this.myForm.status) {
      case "INVALID" :
            //   //No name given
      if(this.myForm.controls.name.status === "INVALID" ) {
        this.placeHolderName = "You forgot to enter a name !";
        this.nameInput.nativeElement.style.border="solid 2px red";
      };
      //Invalid or missing email
      if(this.myForm.controls.email.status === "INVALID") {
        this.placeHolderEmail = "Plz enter a valid email !";
        this.emailInput.nativeElement.style.border="solid 2px red";
      };
      //No message for email
      if(this.myForm.controls.msg.status === "INVALID") {
        this.placeHolderText = "Enter a few word at least :)";
        this.msgInput.nativeElement.style.border="solid 2px red";
      };
        break;

      default:
        this.msgSend = true;
        this.resetForm();
        console.log("myForm after resetform() : ",this.myForm, "status : ", this.myForm.status);
        break;
    };
    
    
  };

  resetForm(){
    this.nameInput.nativeElement.style.border="solid 1px black"
    this.placeHolderName = "Name";
    this.emailInput.nativeElement.style.border="solid 1px black"
    this.placeHolderEmail = "Email";
    this.msgInput.nativeElement.style.border="solid 1px black";
    this.placeHolderText = "Enter your message";
    this.myForm.reset();
  };

}
