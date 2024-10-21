import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-and-event-binding',
  templateUrl: './property-and-event-binding.component.html',
  styleUrls: ['./property-and-event-binding.component.css']
})
export class PropertyAndEventBindingComponent implements OnInit {
    // here we are creating a class variable which we can change throughout our lifecycle and hence have a dynamically changing properties.
    // but to do that we also have to keep the attribute inside Square braces'[]'. whose value we want to change in the code.
    // which in this case is just a button in app.component.html so attribute class will be inside [].
    btnClasses:string = 'btn red';
    isDisabled:boolean=true;
    inputValue:string;
    


    clickedEvent(){
      window.alert('the button was clicked!');
    }

    changeOtherInputs(e:any){
      this.inputValue = e.target.value;
    }

  constructor() {
    // this.name='Tiwari Sagar';
      // this.name ='again sagar tiwari';
      // the above was to check if we can change the values of the initialized variables. answer is yes but only iside function.
      const colors=['pink','red','lightblue','green','purple','magenta'];
      this.btnClasses="btn " + colors[Math.floor(Math.random()*5)];
      this.inputValue="Sagar";


      // this is done because we wanted our user only to be able to click after 2 seconds.
      setTimeout(() => {
        this.isDisabled=false;
      }, 2000);
   }

  ngOnInit(): void {
  }

}
