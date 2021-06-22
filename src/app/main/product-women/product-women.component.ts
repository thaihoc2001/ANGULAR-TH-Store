import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../share/service/products.service';

@Component({
  selector: 'app-product-women',
  templateUrl: './product-women.component.html',
  styleUrls: ['./product-women.component.scss']
})
export class ProductWomenComponent implements OnInit {

  constructor( private commonService: ProductsService ) { }
  public product: Array<any> = [];
  productmen: any;
  page = 1;
  sortPrice = true;
  isDesc = true;
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    this.commonService.getallProducts().subscribe( response => {
      console.log(response);
      const listUser = response || [];
      const listPatient = listUser.filter( (user: { gender: string; }) => user.gender === 'women');
      console.log(listPatient);
      this.product = listPatient;
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
}
