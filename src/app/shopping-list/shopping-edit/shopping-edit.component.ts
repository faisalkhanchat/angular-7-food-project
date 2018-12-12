import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amountInput') ammountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmmount = this.ammountInputRef.nativeElement.value;
    console.log(ingName);
    console.log(ingAmmount);
    const newIngredient = new Ingredient(ingName, ingAmmount);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngridient(newIngredient);
  }

}
