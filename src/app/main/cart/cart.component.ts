import {Component, OnInit} from '@angular/core';
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
  cart: any = [];
  total = 0;
  price = 0;

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
  inc(products: any): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      let list: any = [];
      let index = -1;
      list = JSON.parse(JSON.stringify(this.cartItem)) || [];
      for (let i = 0; i < list.length; i++){
        if (list[i].id === products.id){
          index = i;
          break;
        }
      }
      list[index].quantity += 1;
      this.itemCart = {
        id: this.User.id,
        name: this.User.name,
        cartItem: list
      };
      this.cartService.putCartByID(localStorage.getItem('token'), this.itemCart).subscribe({
        next: () => {
          this.loaddata();
        },
        error: erro => {
          console.log(erro);
        }
      });
      products.quantity = list[index].quantity;
    }else{
      const checkCart = localStorage.getItem('cartItem');
      if (checkCart){
        let index = -1;
        this.cartItem = JSON.parse(localStorage.getItem('cartItem') as string) || [];
        for (let i = 0; i < this.cartItem.length; i++) {
          if (this.cartItem[i].id === products.id){
            index = i;
            break;
          }
        }
        if (index !== -1){
          this.cartItem[index].quantity += 1;
          localStorage.setItem('cartItem', JSON.stringify(this.cartItem));
          products.quantity = this.cartItem[index].quantity;
          this.loaddata();
        }
      }
    }
  }

  dec(products: any): void {
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      let list: any = [];
      let index = -1;
      list = JSON.parse(JSON.stringify(this.cartItem)) || [];
      for (let i = 0; i < list.length; i++){
        if (list[i].id === products.id){
          index = i;
          break;
        }
      }
      list[index].quantity -= 1;
      if (list[index].quantity === 0){
        this.removeItem(products);
      }else{
        this.itemCart = {
          id: this.User.id,
          name: this.User.name,
          cartItem: list
        };
        this.cartService.putCartByID(localStorage.getItem('token'), this.itemCart).subscribe({
          next: () => {
            this.loaddata();
          },
          error: erro => {
            console.log(erro);
          }
        });
        products.quantity = list[index].quantity;
      }
    }else{
      const checkCart = localStorage.getItem('cartItem');
      if (checkCart){
        let index = -1;
        this.cartItem = JSON.parse(localStorage.getItem('cartItem') as string) || [];
        for (let i = 0; i < this.cartItem.length; i++) {
          if (this.cartItem[i].id === products.id){
            index = i;
            break;
          }
        }
        if (index !== -1){
          this.cartItem[index].quantity -= 1;
          if(this.cartItem[index].quantity === 0){
            this.removeItem(products);
          }else{
            localStorage.setItem('cartItem', JSON.stringify(this.cartItem));
            products.quantity = this.cartItem[index].quantity;
            this.loaddata();
          }
        }
      }
    }
  }
  removeItem(products: any): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      let list: any = [];
      list = JSON.parse(JSON.stringify(this.cartItem)) || [];
      for (let i = 0; i < list.length; i++){
        if (list[i].id === products.id){
          list.splice(i , 1);
          this.itemCart = {
            id: this.User.id,
            name: this.User.name,
            cartItem: list
          };
          this.cartService.putCartByID(localStorage.getItem('token'), this.itemCart).subscribe({
            next: () => {
              this.loaddata();
            },
            error: erro => {
              console.log(erro);
            }
          });
        }
      }
    }else{
      const checkCart = localStorage.getItem('cartItem');
      if (checkCart){
        let list = [];
        list = JSON.parse(localStorage.getItem('cartItem') as string) || [];
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === products.id){
            list.splice(i , 1);
            localStorage.setItem('cartItem', JSON.stringify(list));
            this.loaddata();
          }
        }
      }
    }
  }
}
