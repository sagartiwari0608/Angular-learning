import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
 // here we are able to create our own properties and everything that we can use for interpolation in the html.
 name:string='Sagar tiwari';
 age:number=22;
 imagePath:string="/assets/1196816.jpg"
 // we can even call functions inside interpolation.but only those functions which return single item.
 tryFunction(){
  this.name='not sagar';
}
  constructor() { }

  ngOnInit(): void {
  }

}
