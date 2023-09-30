import { Cart } from './../model/cart';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Cart[]=[];
  totalPrice:Subject<number>=new Subject<number>();
  totalQunatity:Subject<number>=new Subject<number>();

  constructor() { }

  addToCart(thecart:Cart)
  {
    let alreadyxistinCart:boolean=false;
    let existingCartItem:any=undefined;
    if(this.cart.length>0)
    {
      existingCartItem=this.cart.find(tempcartitem=> tempcartitem.id==thecart.id);
      alreadyxistinCart=(existingCartItem!=undefined);
    }
    if(alreadyxistinCart)
    {
      existingCartItem.quantity++;
    }
    else{
      this.cart.push(thecart);
    }
    this.computeCartTotal();
  }

  computeCartTotal()
  {
    let totalPriceValue: number=0;
    let totalQunatityValue: number=0;

    for(let currentCartItem of this.cart)
    { 
      totalPriceValue +=currentCartItem.price*currentCartItem.quantity;
      totalQunatityValue+=currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQunatity.next(totalQunatityValue);

  }
  decrementQuantity(cart:Cart){
    cart.quantity--;
    if(cart.quantity===0)
    {
     this.removeCart(cart);
    }
    else{
      this.computeCartTotal();
    }

}
removeCart(cart:Cart)
{
  const index=this.cart.findIndex(tempCartItem=>tempCartItem.id===cart.id)
  if(index>-1)
  {
    this.cart.splice(index,1)
  this.computeCartTotal();
  }
}


}
