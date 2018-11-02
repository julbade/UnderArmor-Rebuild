import { Component} from '@angular/core';
import * as firebase from "firebase";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
  private user;
  constructor() { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

}
