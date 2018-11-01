import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Shoes } from '../shoes.model';
import { ShoesService } from '../shoes.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-shoes-detail',
  templateUrl: './shoes-detail.component.html',
  styleUrls: ['./shoes-detail.component.css'],
  providers: [ShoesService]
})
export class ShoesDetailComponent implements OnInit {
  shoesId: string;
  shoesToDisplay;

  constructor(private route: ActivatedRoute,
    private location: Location, private shoesService: ShoesService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.shoesId = urlParameters['id'];
    });
    this.shoesToDisplay = this.shoesService.getShoesById(this.shoesId);
  }

}
