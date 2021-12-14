import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../features/ingredients.model';
import { ShoppinglistService } from './shoppinglist.service'
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients!:Ingredients[];
  constructor( private shoppinglistService:ShoppinglistService) { }
  
  ngOnInit() {
    this.ingredients=this.shoppinglistService.getIngredients();
  }

  deleteIngredientItem(index:number)
  {
    this.shoppinglistService.deleteIngredient(index);
    this.ingredients=this.shoppinglistService.getIngredients();
  }
}
