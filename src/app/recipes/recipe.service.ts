import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';


import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Schnizel',
      'Super tasty Schnizel - Just awesome',
      'https://www.chex.com/wp-content/uploads/2016/09/Chex-RecipeImages-OriginalChexMix.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ],
    ),
    new Recipe(
      'BigFat Burger',
      'What else you need to say',
      'http://res.publicdomainfiles.com/pdf_view/2/13494127215552.jpg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Meat', 2),
      ],
    ),
  ];



  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngridientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngridients(ingredients);
  }

  addIngridients(ingredient: Ingredient[]) {

  }

}
