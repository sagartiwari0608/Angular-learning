import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // constructor(elem:ElementRef) {
  //   elem.nativeElement.style.backgroundColor ='yellow';
  //   // we have other ways to do this as well.

  //  }

  // following way
  // elem : ElementRef;
  // constructor(elem:ElementRef) {
  //   this.elem=elem; // now this element is accessible in ngoninit as well
  //  }
  //  ngOnInit(){
  //   this.elem.nativeElement.style.backgroundColor='yellow';
  //  }
  // even the above way can shortened
  constructor(private elem:ElementRef){

  }
  // also we can use hostBinding decorator and use that method as well.
  @HostBinding('style.backgroundColor') bgColor:any;
  // anything that includes binding in name deals with properties and anything that has listener in its name deals with events.
  @HostListener('mouseover')
  onEnter(){
    this.bgColor = 'blue';
    }
  @HostListener('mouseleave')
    onleave(){
      this.bgColor = 'yellow';
      }

  ngOnInit(){
    // this.elem.nativeElement.style.backgroundColor='yellow'; // with private elem
    this.bgColor ='yellow'; // with hostbinding
  }



}
