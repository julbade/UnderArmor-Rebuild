import { Component } from '@angular/core';

@Component({
  selector: 'app-middle-row',
  templateUrl: './middle-row.component.html',
  styleUrls: ['./middle-row.component.css']
})
export class MiddleRowComponent {

  constructor() { }

  responsiveNavbar() {
  let x = document.getElementById('navLinks');
  if (x.className === 'navLinks') {
    x.className += ' responsive';
  }  else {
    x.className = 'navLinks';
    }
    let y = document.getElementById('toggle');
    if(y.className === 'fa fa-toggle-down') {
      y.className += 'fa fa-toggle-up';
    } else {
      y.className = 'fa fa-toggle-down';
    }
  }

}
