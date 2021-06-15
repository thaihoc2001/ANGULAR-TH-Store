import { Component, OnInit } from '@angular/core';
import {CartService} from '../../share/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItem: any = [];
  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      this.cartService.getCartByID(localStorage.getItem('token')).subscribe(res => {
        this.cartItem = res.cartItem;
        console.log(this.cartItem);
      });
    }else{
      this.cartItem = JSON.parse(localStorage.getItem('cartItem') as string);
      console.log(this.cartItem);
    }
  }
}
