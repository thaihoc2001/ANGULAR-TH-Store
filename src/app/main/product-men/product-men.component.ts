import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../share/service/products.service';

@Component({
  selector: 'app-product-men',
  templateUrl: './product-men.component.html',
  styleUrls: ['./product-men.component.scss']
})
export class ProductMenComponent implements OnInit {

  constructor( private commonService: ProductsService ) { }
  public product: Array<any> = [];
  productmen: any;
  page = 1;
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
    });
  }
}
