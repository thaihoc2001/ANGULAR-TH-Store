import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {UserService} from '../../share/service/user.service';
import {ProductsService} from '../../share/service/products.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-user-infomation',
  templateUrl: './user-infomation.component.html',
  styleUrls: ['./user-infomation.component.scss']
})
export class UserInfomationComponent implements OnInit {
  infoUser: any = {};
  checkOut: any = {};
  User: any = [];
  id: any;
  model: any;

  constructor( private fb: FormBuilder,
               private userService: UserService,
               private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getUserByID();
  }
  getUserByID(): void{
    this.userService.getUserByID(localStorage.getItem('token')).subscribe(res => {
      this.User = res;
      this.id = this.User.id;
    });
  }

  updateInfo(): void{
    console.log(this.model.name);
    console.log(this.model.address);
    console.log(this.model.phone);
    console.log(this.model.email);
  }
}
