import { ThrowStmt } from "@angular/compiler";

export class Ingredients{
    ingredientname:string;
    quantity:number;
    
    constructor(ingname:string, qnty:number)
    {
        this.ingredientname=ingname;
        this.quantity=qnty;
    }
}