import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketPlaceComponent  {

  constructor() { }

  responsiveNavbar() {
  let x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  }  else {
    x.className = 'topnav';
    }
  }

}
