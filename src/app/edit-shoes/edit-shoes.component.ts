import { Component, Input, OnInit } from '@angular/core';
import { ShoesService} from '../shoes.service';

@Component({
  selector: 'app-edit-shoes',
  templateUrl: './edit-shoes.component.html',
  styleUrls: ['./edit-shoes.component.css'],
  providers: [ShoesService]
})


export class EditShoesComponent implements OnInit {
  @Input() selectedShoes;

  constructor() { }

  ngOnInit() {
  }

  beginUpdatingShoes(shoesToUpdate){
   this.shoesService.updateShoes(shoesToUpdate);
 }

}
