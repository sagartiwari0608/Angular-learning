import { Component, OnChanges, OnInit, SimpleChanges,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecyle-hooks',
  templateUrl: './lifecyle-hooks.component.html',
  styleUrls: ['./lifecyle-hooks.component.css']
})
export class LifecyleHooksComponent implements OnInit,OnChanges,OnDestroy {
  property1!:Boolean;
  property2!:string;
  intervalId= setInterval(()=>{},1000);
  constructor() { }

  ngOnInit(): void {
    // this will runn right after Onchanges() After Angular has initialized all data-bound properties of a directive.
    //which we are doing here. if angular doesn't find any databound properties then it can be used to add event listeners, Initial data fetches.

    this.property2  = 'Sagar Tiwari';
    this.intervalId = setInterval(()=>{
      console.log('timer running...')
    },1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('these values are changed ',changes);
  }

  ngOnDestroy(){
    // this is bassically used to write cleanup code. like clearing up the event listeners or ajax to free up the memory and improve efficiency.
    console.log('either directive, pipe or a service is destroyed.');
    clearInterval(this.intervalId);
  }

}
