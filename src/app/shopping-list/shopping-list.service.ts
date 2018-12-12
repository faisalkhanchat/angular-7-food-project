import { Ingredient } from '../shared/ingredient.modal';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingridientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomotoes', 10),
    new Ingredient('Kaju', 15),
  ];

  getIngridients() {
    return this.ingredients.slice();
  }
  addIngridient( ingredient: Ingredient ) {
    this.ingredients.push(ingredient);
    this.ingridientChanged.emit(this.ingredients.slice());
  }

  addIngridients(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients) {
    //   this.addIngridient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingridientChanged.emit(this.ingredients.slice());
  }

}
