import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Ingredients} from '../../features/ingredients.model'
import { ShoppinglistService } from '../shoppinglist.service'
@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
  constructor(private shoppinglistService: ShoppinglistService) { }
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('quantityInput') quantityInput!:ElementRef;
  ngOnInit() {
    
  }
  addIngredients()
  {
    const newIngredient= new Ingredients (this.nameInput.nativeElement.value,this.quantityInput.nativeElement.value);
    this.shoppinglistService.addIngredient(newIngredient);
    this.clearForm();
  }
  clearForm()
  {
    this.nameInput.nativeElement.value="";
    this.quantityInput.nativeElement.value="";
  }
}
