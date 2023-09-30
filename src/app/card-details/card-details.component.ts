import { CartService } from './../services/cart.service';
import { Cart } from './../model/cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  tempcart:Cart[]=[];
  totalPrice:number=0;
  totalQuantity:number=0;
  username:any=localStorage.getItem('username');
  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.lisTCartdetails();
  }
  lisTCartdetails()
  {
    this.tempcart=this.service.cart;
    for(let i=0;i<this.tempcart.length;i++)
      console.log(this.tempcart[i]);
    this.service.totalPrice.subscribe(data=>this.totalPrice=data);
    this.service.totalQunatity.subscribe(data=>this.totalQuantity=data);
    this.service.computeCartTotal();
  }
  incrementQuantity(theCart:Cart) {
    this.service.addToCart(theCart);
  }

  decrementQuantity(theCart:Cart) {
    this.service.decrementQuantity(theCart);
  }

  remove(theCart:Cart) {
    this.service.removeCart(theCart);
  }

  getTotalPrice(){
    localStorage.setItem('totalPrice', this.totalPrice.toString());
  }
}
