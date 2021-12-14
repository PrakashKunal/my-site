import {Ingredients} from '../features/ingredients.model'
export class ShoppinglistService
{
    ingredients:Ingredients[]=[
        new Ingredients('Tomatoes', 15),
        new Ingredients('Potatoes', 15),
        new Ingredients('Bread', 2),
        new Ingredients('Eggs', 8)
    ];

    getIngredients()
    {
        return this.ingredients;
    }

    addIngredient(ingredient:Ingredients)
    {
        this.ingredients.push(ingredient);
    }
    deleteIngredient(index:number)
    {
        const selectedIngredient=this.ingredients[index];
        this.ingredients=this.ingredients.filter(ingredient=>(ingredient!=selectedIngredient))
    }
}