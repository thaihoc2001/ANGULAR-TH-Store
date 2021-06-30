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
      if (!this.regexName1() || !this.regexAddress1() || !this.regexPhone1() || !this.regexEmail1()){
        alert('Please, come back later');
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
      if (!this.regexName() || !this.regexAddress() || !this.regexPhone() || !this.regexEmail()){
        alert('Please, come back later');
        return false;
      }
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
  regexName(): boolean{
    const element: HTMLElement = document.getElementById('errname') as HTMLElement;
    const regex = /^[A-Za-z\s]+$/;
    if (this.model.name === undefined){
      element.innerHTML = 'Name cannot be left blank';
      return false;
    }else if (regex.test(this.model.name)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Name is wrong format';
      return false;
    }
  }

  regexAddress(): boolean{
    const element: HTMLElement = document.getElementById('erraddress') as HTMLElement;
    const regex = /^[A-Za-z\d\s\-]+$/;
    if (this.model.address === undefined){
      element.innerHTML = 'Address cannot be left blank';
      return false;
    }else if (regex.test(this.model.address)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Address is wrong format';
      return false;
    }
  }

  regexPhone(): boolean{
    const element: HTMLElement = document.getElementById('errphone') as HTMLElement;
    const regex = /^(0)\d{9}$/;
    if (this.model.phone === undefined){
      element.innerHTML = 'Phone cannot be left blank';
      return false;
    }else if (regex.test(this.model.phone)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Phone is wrong format';
      return false;
    }
  }

  regexEmail(): boolean{
    const element: HTMLElement = document.getElementById('erremail') as HTMLElement;
    const regex = /^[\w]+\@(gmail)\.(com)$/;
    if (this.model.email === undefined){
      element.innerHTML = 'Phone cannot be left blank';
      return false;
    }else if (regex.test(this.model.email)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Phone is wrong format';
      return false;
    }
  }
  regexName1(): boolean{
    const element: HTMLElement = document.getElementById('errname1') as HTMLElement;
    const regex = /^[A-Za-z\s]+$/;
    if (this.name1 === undefined){
      element.innerHTML = 'Name cannot be left blank';
      return false;
    }else if (regex.test(this.name1)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Name is wrong format';
      return false;
    }
  }

  regexAddress1(): boolean{
    const element: HTMLElement = document.getElementById('erraddress1') as HTMLElement;
    const regex = /^[A-Za-z\d\s\-]+$/;
    if (this.address1 === undefined){
      element.innerHTML = 'Address cannot be left blank';
      return false;
    }else if (regex.test(this.address1)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Address is wrong format';
      return false;
    }
  }

  regexPhone1(): boolean{
    const element: HTMLElement = document.getElementById('errphone1') as HTMLElement;
    const regex = /^(0)\d{9}$/;
    if (this.phone1 === undefined){
      element.innerHTML = 'Phone cannot be left blank';
      return false;
    }else if (regex.test(this.phone1)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Phone is wrong format';
      return false;
    }
  }

  regexEmail1(): boolean{
    const element: HTMLElement = document.getElementById('erremail1') as HTMLElement;
    const regex = /^[\w]+\@(gmail)\.(com)$/;
    if (this.email1 === undefined){
      element.innerHTML = 'Phone cannot be left blank';
      return false;
    }else if (regex.test(this.email1)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Phone is wrong format';
      return false;
    }
  }
}
