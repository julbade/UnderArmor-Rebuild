import { Injectable } from '@angular/core';
import { Shoes } from './shoes.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShoesService {
  shoes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.shoes = database.list('underarmour-rebuild-6546c');
  }

  getShoes(){
    return this.shoes;
  }

  addShoes(newShoes: Shoes) {
    this.shoes.push(newShoes);
  }

  getShoesById(shoesId: string){
  return this.database.object('underarmour-rebuild-6546c/' + shoesId)
  }

}
