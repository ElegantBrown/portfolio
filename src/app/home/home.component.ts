import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('typewriter', { static: true }) typewriter: ElementRef;

    constructor() { }

    ngOnInit() {
        this.setupTypewriter(this.typewriter.nativeElement).type();
        // setTimeout(() => this.showButton(), 3000);
    }


    setupTypewriter(t) {
        let HTML:string = t.innerHTML;
        t.innerHTML = "";
        let cursorPosition: number = 0;
        let tag: any = "";
        let writingTag: boolean = false;
        let tagOpen: boolean = false;
        let typeSpeed: number = 1;
        let tempTypeSpeed: number = 0;

        let type = function () {
            if (writingTag === true) {
                tag += HTML[cursorPosition];
                // console.log("var tag = ", tag);
            }

            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
                // console.log("tag2 =", tag);

            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                }
                else {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                }
                t.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 40;
                writingTag = false;
                if (tagOpen) {
                    let newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }

            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }

        };

        return {
            type: type
        };
    }

    slideTo(id) {
      //slide to some elements by id
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    };

    // showButton(){
    //     document.getElementById('whoIAmBtn').style.display="inline";
        
    // }
}
