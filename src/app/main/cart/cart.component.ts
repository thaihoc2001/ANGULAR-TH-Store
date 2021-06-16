import { Component, OnInit } from '@angular/core';
import {CartService} from '../../share/service/cart.service';
import {ProductsService} from '../../share/service/products.service';
import {UserService} from '../../share/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItem: any = [];
  User: any = [];
  itemCart: any = [];
  prodcutItem: any = [];
  cart: any = [];


  constructor( private cartService: CartService,
               private userService: UserService) { }

  ngOnInit(): void {
    this.loaddata();
    this.getUser(localStorage.getItem('token'));
  }
  getUser(id: any): void{
    this.userService.getUserByID(id).subscribe(user => {
      this.User = user;
      JSON.stringify(this.User);
    });
  }
  loaddata(): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      this.cartService.getCartByID(localStorage.getItem('token')).subscribe(res => {
        this.cart = res;
        this.cartItem = res.cartItem || [];
        console.log(this.cartItem);
      });
    }else{
      this.cartItem = JSON.parse(localStorage.getItem('cartItem') as string);
      console.log(this.cartItem);
    }
  }
  totalPrice(item: any): void{
    let total = 0;
    total = item.quantity * item.price;
    item.price = total;
  }

  inc(products: any): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      const list = [];
      let index = -1;
      list.push(products);
      if (this.cart.length === 0){
        this.itemCart = {
          id: this.User.id,
          name: this.User.name,
          cartItem: list
        };
        this.cartService.postCart(this.itemCart).pipe().subscribe({
          next: () => {
            window.location.reload();
          },
          error: erro => {
            console.log(erro);
          }
        });
      }else{
        this.prodcutItem = JSON.parse(JSON.stringify(this.cart.cartItem)) || [];
        for (let i = 0; i < this.prodcutItem.length; i++){
          if (this.prodcutItem[i].id === products.id){
            index = i;
            break;
          }
        }
        if (index === -1){
          this.prodcutItem.push(JSON.parse(JSON.stringify(products)));
          this.itemCart = {
            id: this.User.id,
            name: this.User.name,
            cartItem: this.prodcutItem
          };
          this.cartService.putCartByID(localStorage.getItem('token'), this.itemCart).pipe().subscribe({
            next: () => {
              window.location.reload();
            },
            error: erro => {
              console.log(erro);
            }
          });
        }else{
          this.prodcutItem[index].quantity += 1;
          this.itemCart = {
            id: this.User.id,
            name: this.User.name,
            cartItem: this.prodcutItem
          };
          this.cartService.putCartByID(localStorage.getItem('token'), this.itemCart).pipe().subscribe({
            next: () => {
            },
            error: erro => {
              console.log(erro);
            }
          });
          products.quantity = this.prodcutItem[index].quantity;
        }
      }
    }else{
      const checkCart = localStorage.getItem('cartItem');
      if (checkCart){
        let list = [];
        let index = -1;
        list = JSON.parse(localStorage.getItem('cartItem') as string) || [];
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === products.id){
            index = i;
            break;
          }
        }
        if (index === -1){
          list.push(products);
          localStorage.setItem('cartItem', JSON.stringify(list));
        }else{
          list[index].quantity += 1;
          localStorage.setItem('cartItem', JSON.stringify(list));
          products.quantity = list[index].quantity;
        }
      }else{
        const list1: any = [];
        list1.push(products);
        localStorage.setItem('cartItem', JSON.stringify(list1));
      }
    }
  }

  dec(products: any): void {
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      const list = [];
      let index = -1;
      list.push(products);
      if (this.cart.length === 0){
        this.itemCart = {
          id: this.User.id,
          name: this.User.name,
          cartItem: list
        };
        this.cartService.postCart(this.itemCart).pipe().subscribe({
          next: () => {
            window.location.reload();
          },
          error: erro => {
            console.log(erro);
          }
        });
      }else{
        this.prodcutItem = JSON.parse(JSON.stringify(this.cart.cartItem)) || [];
        for (let i = 0; i < this.prodcutItem.length; i++){
          if (this.prodcutItem[i].id === products.id){
            index = i;
            break;
          }
        }
        if (index === -1){
          this.prodcutItem.push(JSON.parse(JSON.stringify(products)));
          this.itemCart = {
            id: this.User.id,
            name: this.User.name,
            cartItem: this.prodcutItem
          };
          this.cartService.putCartByID(localStorage.getItem('token'), this.itemCart).pipe().subscribe({
            next: () => {
              window.location.reload();
            },
            error: erro => {
              console.log(erro);
            }
          });
        }else{
          this.prodcutItem[index].quantity -= 1;
          this.itemCart = {
            id: this.User.id,
            name: this.User.name,
            cartItem: this.prodcutItem
          };
          this.cartService.putCartByID(localStorage.getItem('token'), this.itemCart).pipe().subscribe({
            next: () => {
            },
            error: erro => {
              console.log(erro);
            }
          });
          products.quantity = this.prodcutItem[index].quantity;
        }
      }
    }else{
      const checkCart = localStorage.getItem('cartItem');
      if (checkCart){
        let list = [];
        let index = -1;
        list = JSON.parse(localStorage.getItem('cartItem') as string) || [];
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === products.id){
            index = i;
            break;
          }
        }
        if (index === -1){
          list.push(products);
          localStorage.setItem('cartItem', JSON.stringify(list));
        }else{
          list[index].quantity -= 1;
          localStorage.setItem('cartItem', JSON.stringify(list));
          products.quantity = list[index].quantity;
        }
      }else{
        const list1: any = [];
        list1.push(products);
        localStorage.setItem('cartItem', JSON.stringify(list1));
      }
    }
  }

}
