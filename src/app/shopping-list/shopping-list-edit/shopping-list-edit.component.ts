import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameRef:ElementRef;
  @ViewChild('amountInput',{static:false}) amountRef:ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName,ingAmount);
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredients(newIngredient);

  }
}
