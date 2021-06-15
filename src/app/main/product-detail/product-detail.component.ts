import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../share/service/products.service';
import {UserService} from '../../share/service/user.service';
import {CartService} from '../../share/service/cart.service';
import { ActivatedRoute } from '@angular/router';
import {first} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private cartService: CartService) { }
  products: any;
  describe: any;
  id: any;
  User: any = [];
  cart: any = [];
  itemCart: any = [];
  prodcutItem: any = [];
  localcart: any[] = [];
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getProdcut(this.id);
    this.getProductDetail(this.id);
    this.getUser(localStorage.getItem('token'));
    this.getCartbyID(localStorage.getItem('token'));
  }
  getProdcut(id: any): void{
    this.productsService.getProductsbyID(id).subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
  getProductDetail(id: any): void{
    this.productsService.getProductDetailByID(id).subscribe(res => {
      console.log(res);
      this.describe = res;
      JSON.stringify(this.describe);
    });
  }
  showImage(id: any): void {
    const img1 = document.getElementById(id);
    const mainimg = document.getElementById('main-img');
    // @ts-ignore
    const getattr =  img1.getAttribute('src');
    // @ts-ignore
    mainimg.setAttribute('src', getattr);
  }
  getUser(id: any): void{
    this.userService.getUserByID(id).subscribe(user => {
      this.User = user;
      JSON.stringify(this.User);
    });
  }
  getCartbyID(id: any): void{
    this.cartService.getCartByID(id).subscribe(itemCart => {
      this.cart = itemCart || [];
    });
  }
  addCart(products: any): void{
    const checkLogin = localStorage.getItem('message');
    if (checkLogin){
      const list = [];
      list.push(products);
      if (this.cart.length === 0){
        this.itemCart = {
          id: this.User.id,
          name: this.User.name,
          cartItem: list
        };
        this.cartService.postCart(this.itemCart).pipe(first()).subscribe({
          next: () => {
            console.log('Post suscess 1');
          },
          error: erro => {
            console.log('ERRR: Post fail');
          }
        });
      }else{
        this.prodcutItem = JSON.parse(JSON.stringify(this.cart.cartItem)) || [];
        this.prodcutItem.push(JSON.parse(JSON.stringify(products)));
        this.itemCart = {
          id: this.User.id,
          name: this.User.name,
          cartItem: this.prodcutItem
        };
        this.cartService.putCartByID(localStorage.getItem('token'), this.itemCart).pipe(first()).subscribe({
          next: () => {
            console.log('Put suscess 2');
          },
          error: erro => {
            console.log('ERRR: put fail 2');
          }
        });
      }
    }else{
      const checkCart = localStorage.getItem('cartItem');
      if (checkCart){
        let list = [];
        let index = -1;
        list = JSON.parse(localStorage.getItem('cartItem') as string) || [];
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === products.id){
            console.log('cong thanh cong');
            index = i;
            console.log(index);
            break;
          }
        }
        if (index === -1){
          console.log('post thanh cong');
          list.push(products);
          localStorage.setItem('cartItem', JSON.stringify(list));
        }else{
          products.quantity += 1;
          list[index] = products;
          localStorage.setItem('cartItem', JSON.stringify(list));
        }
      }else{
        const list1: any = [];
        list1.push(products);
        localStorage.setItem('cartItem', JSON.stringify(list1));
      }
    }
  }
}
