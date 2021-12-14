import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Ingredients} from '../../features/ingredients.model'
import { ShoppinglistService } from '../shoppinglist.service'
@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
  constructor(private shoppinglistService: ShoppinglistService) { }
  ngOnInit() {
    
  }
  addIngredients(form:NgForm)
  {
    const newIngredient= new Ingredients (form.value.name,form.value.quantity);
    this.shoppinglistService.addIngredient(newIngredient);
    this.clearForm(form);
  }
  clearForm(form:NgForm)
  {
    console.log(form);
    form.value.name="";
    form.value.quantity="";
  }
}