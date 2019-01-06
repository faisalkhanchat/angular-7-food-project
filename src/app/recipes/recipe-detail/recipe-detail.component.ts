import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor( private recipeService: RecipeService, public route: ActivatedRoute) { }
  recipe: Recipe;
  id: number;
  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
          console.log(this.id);
        }
      );
  }
  onAddToShoppingList() {
    this.recipeService.addIngridientToShoppingList(this.recipe.ingridients);
  }

}
