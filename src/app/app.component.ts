import { Component } from '@angular/core';
import { User } from './user';

@Component({
  //selector is basically a custom HTML tag that can be used to represent the component
  selector: 'app-root',
  //points to the HTML file which is a view of this component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue']

  //bind user model data to form
  userModel=new User('WEI','WEI@GMU.EDU',1234567891,'','MORNING',true);

}
