import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe("pasta", "buonissima", "https://via.placeholder.com/150", [new Ingredient("uovo", 1), new Ingredient("farina", 2)]),
        new Recipe("Carne", "Abbastanza buona", "https://via.placeholder.com/150", [new Ingredient("carne", 1), new Ingredient("latte", 2)])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}