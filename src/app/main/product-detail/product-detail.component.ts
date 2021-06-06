import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../share/service/common.service';
import { ActivatedRoute } from '@angular/router';
import {main} from '@angular/compiler-cli/src/main';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute ) { }
  products: any;
  describe: any;
  id: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getProdcut(this.id);
    this.getProductDetail(this.id);
  }
  getProdcut(id: any): void{
    this.commonService.getProductsbyID(id).subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
  getProductDetail(id: any): void{
    this.commonService.getProductDetailByID(id).subscribe(res => {
      console.log(res);
      this.describe = res;
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
}
