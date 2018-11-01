
import { Component, OnInit } from '@angular/core';
import { Shoes } from '../shoes.model';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ShoesService]
})
export class AdminComponent implements OnInit {

  constructor(private shoesService: ShoesService) { }

  ngOnInit() {

  }
  submitForm(name: string, price: number, size: number) {
     var newShoes: Shoes = new Shoes(name, price, size);
     this.shoesService.addShoes(newShoes);
   }


}
