import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
  import { from } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngridients();
    this.slService.ingridientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients ;
      }
    );
  }

}
