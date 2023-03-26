import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Spaghetti pie','Spaghetti pie is a budget-friendly way to deliver comforting flavors','https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ROBCBUCRT76UT24BGTWJ5UKUAY.jpg&w=860', [
            new Ingredient('vermicelli' ,1),
            new Ingredient('onion', 3)
        ]),
        new Recipe('Chorizo & mozzarella gnocchi bake','Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272', [
            new Ingredient('tomato', 5),
            new Ingredient('mozarella', 1)

        ])];
       
    constructor(private slService: ShoppingListService){}
    getRecipe(){
    return this.recipes.slice();
    }

    addInggredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}