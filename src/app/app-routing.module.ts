import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import {ShoppinglistComponent} from './shoppinglist/shoppinglist.component'
import {RecipedetailComponent} from './recipes/recipedetail/recipedetail.component'
import {RecipelistComponent} from './recipes/recipelist/recipelist.component'
const appRoutes: Routes = [
  { path:'',redirectTo:'/recipes', pathMatch:'full'},
  { path:"recipes" ,component:RecipesComponent,children:[
    {path:':id',component:RecipedetailComponent},
    { path:'recipelist',component:RecipelistComponent},
  ]},
  { path:'shoppinglist', component: ShoppinglistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
