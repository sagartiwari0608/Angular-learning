import { Component } from '@angular/core';
import { User } from './Interfaces/Users'

@Component({
 // there are more than one ways to use the selector.

  //1st & most used. creating a tag out of it.
  selector:'app-root',

  // 2nd using it as a class. then while running the code will automatically get injected into the tag
  // selector : ".app-root"

  //3rd way is using it as attribute. & this will also be injected in the code while runtime.
  // selector: "[app-root]",

  templateUrl:'./app.component.html',   // this . / here dot means current working directory and slash is for finding something inside it. if we use double dot then it would refer to its parent directory.
  styleUrls:['./app.component.css']
})

export class AppComponent {
  property1:boolean;
  content_projection:string='Anything';
  Users:Array<User> =[
    { nameInParent:'sagar tiwari', age: 22, status:'married', hobby:'jim'},
    { nameInParent:'tmatar', age: 21, status:'single', hobby:'coding'},
    { nameInParent:'gandhi', age: 23, status:'taken', hobby:'shayri'}
  ];

  PipeVar='Custom Pipe';

  // so the value emitted will act as a event and that event will be caught and can be used however we want.
  displayinConsole(data:any){
    console.log(data);
    this.Users[0].nameInParent=data[1];
    this.Users[1].nameInParent=data[0];
    this.Users[2].nameInParent=data[2];
  }

    constructor(){
      this.property1  = true;
    }

  }
