import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../features/ingredients.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  constructor() { }
  ingredients:Ingredients[]=[
    new Ingredients('Tomatoes', 15),
    new Ingredients('Tomatoes', 15),
    new Ingredients('Tomatoes', 15),
    new Ingredients('Tomatoes', 15)
  ];
  ngOnInit(): void {
  }

}
