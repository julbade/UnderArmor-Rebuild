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

  constructor(private shoesService: ShoesService) { }

  ngOnInit() {
  }

  beginUpdatingShoes(shoesToUpdate){
   this.shoesService.updateShoes(shoesToUpdate);
 }
 beginDeletingShoes(shoesToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.shoesService.deleteShoes(shoesToDelete);
    }

  }
}
