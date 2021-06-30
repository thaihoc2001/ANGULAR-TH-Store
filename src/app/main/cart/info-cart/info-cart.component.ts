import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../share/service/user.service';
import {ProductsService} from '../../../share/service/products.service';
import {CartService} from '../../../share/service/cart.service';

@Component({
  selector: 'app-info-cart',
  templateUrl: './info-cart.component.html',
  styleUrls: ['./info-cart.component.scss']
})
export class InfoCartComponent implements OnInit {
  model: any;
  User: any;
  cart: any;
  cartItem: any = [];
  total: any;
  name1: any;
  address1: any;
  phone1: any;
  email1: any;
  userInfo: any;
  id: any;

  constructor(private userService: UserService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getUserByID();
    this.loaddata();
  }
  getUserByID(): void{
    if (this.checkLogin()){
      this.userService.getUserByID(localStorage.getItem('token')).subscribe(res => {
        this.User = res;
        this.model = res;
        this.id = res.id;
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
  loaddata(): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      this.cartService.getCartByID(localStorage.getItem('token')).subscribe(res => {
        this.cart = res;
        this.cartItem = res.cartItem || [];
        // this.cartItem.forEach((data: { price: any; quantity: any; }) => this.total = data.price * data.quantity);
        // tslint:disable-next-line:only-arrow-functions typedef
        this.total = this.cartItem.reduce(function(acc: any, val: any){
          return acc + (val.price * val.quantity);
        }, 0);
      });
    }else{
      this.cartItem = JSON.parse(localStorage.getItem('cartItem') as string);
      console.log(this.cartItem);
      // tslint:disable-next-line:only-arrow-functions typedef
      this.total = this.cartItem.reduce(function(acc: any, val: any){
        return acc + (val.price * val.quantity);
      }, 0);
    }
  }
  paymentInfo(): any{
    if (!this.checkLogin()){
      if (this.name1 === undefined || this.address1 === undefined || this.phone1 === undefined || this.email1 === undefined){
        alert('Please,Fill in your personal information');
        return false;
      }
      window.location.href = '/cart/payCart';
      this.userInfo = {
        name: this.name1,
        address: this.address1,
        phone: this.phone1,
        email: this.email1
      };
      localStorage.setItem('UserInfo', JSON.stringify(this.userInfo));
    }else{
      window.location.href = '/cart/payCart';
      this.userInfo = {
        name: this.model.name,
        address: this.model.address,
        phone: this.model.phone,
        email: this.model.email,
        password: this.model.password
      };
      this.userService.putInfoUser(this.userInfo, this.id).subscribe(res => {
        console.log(res);
        console.log('success');
      });
    }
  }
}
