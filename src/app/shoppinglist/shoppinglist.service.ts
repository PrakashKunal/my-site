import {Ingredients} from '../features/ingredients.model'
export class ShoppinglistService
{
    ingredients:Ingredients[]=[
        new Ingredients('Tomatoes', 15),
        new Ingredients('Tomatoes', 15),
        new Ingredients('Tomatoes', 15),
        new Ingredients('Tomatoes', 15)
    ];

    getIngredients()
    {
        return this.ingredients;
    }

    addIngredient(ingredient:Ingredients)
    {
        this.ingredients.push(ingredient);
    }
}