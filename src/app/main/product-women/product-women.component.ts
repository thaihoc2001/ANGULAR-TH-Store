import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../share/service/common.service';

@Component({
  selector: 'app-product-women',
  templateUrl: './product-women.component.html',
  styleUrls: ['./product-women.component.scss']
})
export class ProductWomenComponent implements OnInit {

  constructor( private commonService: CommonService ) { }
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
      const listPatient = listUser.filter( (user: { gender: string; }) => user.gender === 'women');
      console.log(listPatient);
      this.product = listPatient;
    });
  }
}
