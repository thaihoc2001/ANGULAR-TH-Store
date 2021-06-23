import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../share/service/products.service';
// @ts-ignore
import _ = require('lodash');

@Component({
  selector: 'app-product-men',
  templateUrl: './product-men.component.html',
  styleUrls: ['./product-men.component.scss']
})
export class ProductMenComponent implements OnInit {
  constructor( private commonService: ProductsService ) { }
  filter = { polo: false, tshirt: true, sweater: true, jean: true };
  public product: Array<any> = [];
  productmen: any;
  page = 1;
  sortPrice = true;
  isDesc = true;
  checkedBrand = false;
  newArr: any = [];
  tempArr: any = [];
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    this.commonService.getallProducts().subscribe( response => {
      console.log(response);
      const listUser = response || [];
      const listPatient = listUser.filter( (user: { gender: string; }) => user.gender === 'men');
      console.log(listPatient);
      this.product = listPatient;
      this.productmen = listPatient;
    });
  }

  sortByPrice(): void{
    if (this.sortPrice){
      const newarr = this.product.sort((a, b) => a.price - b.price);
      this.product = newarr;
    }else {
      const newarr = this.product.sort((a, b) => b.price - a.price);
      this.product = newarr;
    }
    this.sortPrice = !this.sortPrice;
  }
  sortByName(name: any): void{
    this.isDesc = !this.isDesc;
    const direction = this.isDesc ? 1 : -1;
    // tslint:disable-next-line:only-arrow-functions typedef
    this.product.sort(function(a, b){
      if (a[name] < b[name]){
        return -1 * direction;
      }else if (a[name] > b[name]){
        return  1 * direction;
      }else {
        return 0;
      }
    });
  }
  onChange(event: any): void {
    if (event.target.checked){
      let arr1 = [];
      let arr2 = [];
      this.tempArr = this.productmen.filter((item: { slug: any; }) => item.slug === event.target.value);
      this.product = [];
      this.newArr.push(this.tempArr);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.newArr.length; i++){
        arr1 = this.newArr[i];
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < arr1.length ; j++){
          arr2 = arr1[j];
          this.product.push(arr2);
        }
      }
    }else{
      this.tempArr = this.product.filter((item: { slug: any; }) => item.slug !== event.target.value);
      this.newArr = [];
      this.product = [];
      this.newArr.push(this.tempArr);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.newArr.length; i++){
        const arr1 = this.newArr[i];
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < arr1.length ; j++){
          const arr2 = arr1[j];
          this.product.push(arr2);
        }
      }
    }
  }
}
