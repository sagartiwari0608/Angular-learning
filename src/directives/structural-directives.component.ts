import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  salary:number;
  fruits:string[];
  constructor() {
    this.salary=300;
    this.fruits=['apple','grapes','mango','pineapple','banana','peach','orange'];

  }


  ngOnInit(): void {
  }

}
