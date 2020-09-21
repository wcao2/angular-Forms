import { Component, OnInit } from '@angular/core';

@Component({
  //custom html tag
  // ./app-test <div class="app-test"(app.html)>  [app-test] <div app-test>
  selector: 'app-test',
  //templateUrl: './test.component.html',
  //html and css also can be inline in the ts file, use back-ticks to specify multiple lines of html and css
  template: `<div>
                <input [id]="myId" type="text" value="WeiCao">
                <input [disabled]="isDisabled" id={{myId}} type="text" value="WeiCao">

                <h2 class="text-success">The crazy world</h2>
                <h2 [class]="successClass">The crazy world+1</h2>
                <h2 [class.text-danger]="hasError">The crazy world+2</h2>
                <h2 [ngClass]="messageClasses">The crazy world+2</h2>

                <h2 [style.color]="'orange'">8style binding</h2>
                <h2 [style.color]="hasError ? 'red':'green'">8style binding+1</h2>
                <h2 [style.color]="hightColor">8style binding+2</h2>
                <h2 [ngStyle]="titleStyles">8style binding+3</h2>

                <button (click)="onClick($event)">Greet</button>
                <button (click)="greeting='welcome Wei Cao'">Greet</button>
                {{greeting}}

                <input #myInput type="text" >
                <button (click)="logMessage(myInput.value)">log</button>
              </div>`,
  //styleUrls: ['./test.component.css']
  //7:class binding
  styles:[`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  //bind this value to the HTML id property of the input element
  public myId="testId";
  public isDisabled=true;
  //7define successClass property
  public successClass="text-success";
  //7apply the class based on the expression that evaluate either be true or false
  public hasError=true;
  public isSpecial=true;
  //7 conclusion:class binding is useful it allows you to dynamically 
  //add or remove classes to HTML elements based on certain user interactions or state of your app.
  //can change the class be applied by change the properties in component class
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  //8: style binding apply inline styles to HTML elements
  //assign this class property 
  public hightColor="orange";
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }

  //9
  public greeting="";
  //sometimes we also want info about event itself
  //use $event above,can get access to all the properties of the DOM event
  //or do not assign the handler to the click event
  onClick(event){
    console.log("welcome to angular")
    console.log(event);
    //bind the click event, and set the value of the property in the component class
    //this.greeting="welcome to angular";
    this.greeting=event.type;
  }  

  //10:get value from input element using template variable
  logMessage(value){
    console.log(value);
  }

  ngOnInit() {
  }

}
