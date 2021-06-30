import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../share/service/cart.service';

@Component({
  selector: 'app-pay-cart',
  templateUrl: './pay-cart.component.html',
  styleUrls: ['./pay-cart.component.scss']
})
export class PayCartComponent implements OnInit {
  cartItem: any = [];
  total: any;
  quantity = 0;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      this.cartService.getCartByID(localStorage.getItem('token')).subscribe(res => {
        this.cartItem = res.cartItem || [];
        this.cartItem.map((item: { quantity: any; }) => this.quantity += item.quantity);
        console.log(this.quantity);
        // tslint:disable-next-line:only-arrow-functions typedef
        this.total = this.cartItem.reduce(function(acc: any, val: any){
          return acc + (val.price * val.quantity);
        }, 0);
      });
    }else{
      this.cartItem = JSON.parse(localStorage.getItem('cartItem') as string);
      console.log(this.cartItem);
      this.cartItem.map((item: { quantity: any; }) => this.quantity += item.quantity);
      // tslint:disable-next-line:only-arrow-functions typedef
      this.total = this.cartItem.reduce(function(acc: any, val: any){
        return acc + (val.price * val.quantity);
      }, 0);
    }
  }

  Order(): void{

  }
}
