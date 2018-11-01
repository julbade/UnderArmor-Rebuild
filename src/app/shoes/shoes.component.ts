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

  shoes: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private shoesService: ShoesService) { }

  goToDetailPage(clickedShoes) {
    this.router.navigate(['shoes', clickedShoes.$key]);

  }

  ngOnInit() {
    this.shoes = this.shoesService.getShoes();
    console.log(this.router.url);
  }


}
