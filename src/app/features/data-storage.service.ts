import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service'
@Injectable()
export class DataStorageService {

    constructor(private http:HttpClient,
                private recipeService:RecipeService) {}

    addRecipes()
    {
        const recipes=this.recipeService.getRecipes();
        this.http.put('https://my-site-65790-default-rtdb.firebaseio.com/recipes.json',recipes)
        .subscribe(
            (response)=>{
                console.log(response);
            }
        );
    }
    fetchRecipes()
    {
       this.http.get('https://my-site-65790-default-rtdb.firebaseio.com/recipes.json')
       .subscribe((response)=>{this.recipeService.setRecipes(response);})
    }
}