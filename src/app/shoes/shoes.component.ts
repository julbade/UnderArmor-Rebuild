import { Component, OnInit } from '@angular/core';
import { Shoes } from '../shoes.model';
import { Router} from '@angular/router';
import { ShoesService } from '../shoes.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
  providers: [ShoesService]
})
export class ShoesComponent implements OnInit {
    constructor(private router: Router, private shoesService: ShoesService) { }

  shoes: FirebaseListObservable<any[]>;
  goToDetailPage(clickedShoes) {
    this.router.navigate(['shoes', clickedShoes.$key]);
  }

  ngOnInit() {
    this.shoes = this.shoesService.getShoes();
  }


}
