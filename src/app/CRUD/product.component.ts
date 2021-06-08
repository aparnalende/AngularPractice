import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
id:number=0;
name:string="";
price:number=0;
category:string="";
products:any=[];
selectedIndex:number=0;
isEdited:boolean=false;
isAdded:boolean=true;

AddData():void{
  this.isAdded=true;
  this.products.push({
    "id":this.id,
    "name":this.name,
    "category":this.category,
    "price":this.price
  });
  this.id=0;
  this.name="";
  this.category="";
  this.price=0;
  console.log(this.products.length);
}

removeProduct(i:number){
  this.products.splice(i,1);
}
editProduct(i:number){
  this.isEdited=true;
  this.isAdded=false;
  this.selectedIndex=i;
  this.id=this.products[i].id;
  this.name=this.products[i].name;
  this.category=this.products[i].category;
  this.price=this.products[i].price;
}
updateData(){
  this.isEdited=false;
  this.isAdded=true;
  this.products[this.selectedIndex].id=this.id;
  this.products[this.selectedIndex].name=this.name;
  this.products[this.selectedIndex].category=this.category;
  this.products[this.selectedIndex].price=this.price;

  this.id=0;
  this.name="";
  this.price=0;
  this.category="";
}
}
