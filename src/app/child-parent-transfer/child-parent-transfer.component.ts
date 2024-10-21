// to get data from parent to child we need @Input
import { Component, OnInit , Input } from '@angular/core';

// & to get data from child to a parent we use @Output & EventEmitter
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child-parent-transfer',
  templateUrl: './child-parent-transfer.component.html',
  styleUrls: ['./child-parent-transfer.component.css']
})
export class ChildParentTransferComponent implements OnInit {
  @Input() nameInChild!:string;
  @Input() age!:number;
  @Input() status!:string;
  @Input() hobby!:string;

  @Output() myEvent = new EventEmitter<string>();

  dataToParent(value:any){
    this.myEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
