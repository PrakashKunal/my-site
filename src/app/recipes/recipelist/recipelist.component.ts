import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  constructor() { }
  recipes:Recipe[]=[
    new Recipe('Test recipe', 'This is a Test Recipe', 'https://media.istockphoto.com/photos/woman-baking-cake-with-freshly-picked-apples-picture-id1255425993?b=1&k=20&m=1255425993&s=170667a&w=0&h=03Txrx5SqUbkMwuPadhNrraM7W44WYypsvrBuYO4zg0=' ),
    new Recipe('Test recipe', 'This is a Test Recipe', 'https://media.istockphoto.com/photos/woman-baking-cake-with-freshly-picked-apples-picture-id1255425993?b=1&k=20&m=1255425993&s=170667a&w=0&h=03Txrx5SqUbkMwuPadhNrraM7W44WYypsvrBuYO4zg0=' ),
    
  ];
  
  ngOnInit(): void {
  }

}
