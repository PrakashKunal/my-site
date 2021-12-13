import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service'

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute
              ) { }
  recipe!:Recipe;
  id:any;
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{this.id=+params['id'];
      this.recipe=this.recipeService.getrecipebyindex(this.id);
    }
    )
    
  }

}
