import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../share/service/cart.service';
import {UserService} from '../../../share/service/user.service';
import {OrderService} from '../../../share/service/order.service';

@Component({
  selector: 'app-pay-cart',
  templateUrl: './pay-cart.component.html',
  styleUrls: ['./pay-cart.component.scss']
})
export class PayCartComponent implements OnInit {
  cartItem: any = [];
  total: any;
  quantity = 0;
  User: any;
  infoUser: any;
  date = new Date();
  id: any;

  constructor( private cartService: CartService,
               private userService: UserService,
               private orderService: OrderService) { }

  ngOnInit(): void {
    this.loaddata();
    this.getUserByID();
  }
  loaddata(): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      this.cartService.getCartByID(localStorage.getItem('token')).subscribe(res => {
        this.cartItem = res.cartItem || [];
        this.cartItem.map((item: { quantity: any; }) => this.quantity += item.quantity);
        this.cartItem.map((item: { id: any; }) => this.id = item.id);
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
  getUserByID(): void{
    if (this.checkLogin()){
      this.userService.getUserByID(localStorage.getItem('token')).subscribe(res => {
        this.User = res;
      });
    }
  }
  checkLogin(): boolean{
    const message = localStorage.getItem('message');
    if (message){
      return true;
    }else{
      return false;
    }
  }
  Order(): void{
    if (this.checkLogin()){
      this.infoUser = {
        name: this.User.name,
        address: this.User.address,
        phone: this.User.phone,
        email: this.User.email,
        products: this.cartItem,
        total: this.total,
        date: this.date
      };
      this.orderService.postOrder(this.infoUser).subscribe({
        next: () => {
          this.cartService.deleteCartByID(this.id).subscribe(res => console.log(res));
          window.location.href = '/home';
        },
        error: erro => {
          console.log(erro);
        }
      });
    }else{
      this.User = JSON.parse(localStorage.getItem('UserInfo') as string);
      this.infoUser = {
        name: this.User.name,
        address: this.User.address,
        phone: this.User.phone,
        email: this.User.email,
        products: this.cartItem,
        total: this.total,
        date: this.date
      };
      this.orderService.postOrder(this.infoUser).subscribe({
        next: () => {
          localStorage.removeItem('cartItem');
          window.location.href = '/home';
        },
        error: erro => {
          console.log(erro);
        }
      });
    }
  }
}
