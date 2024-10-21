import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomVar:string='bruh Moment';
  myDate:Date=new Date(); // this will return current date in full format.
  constructor() {

  }

  ngOnInit(): void {
  }

}





