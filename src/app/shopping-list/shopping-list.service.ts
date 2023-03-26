import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged =  new EventEmitter<Ingredient[]>();
  ingredients : Ingredient[] = [
    new Ingredient('apple',5),
    new Ingredient('banana', 10)
  ];

getIngredients(){
    return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients)
    this.ingredients.push(...ingredients);  //spread operator: change an array of elments to list of elements
    this.ingredientsChanged.emit(this.ingredients.slice());
}
}