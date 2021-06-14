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

  constructor( private fb: FormBuilder,
               private userService: UserService,
               private productsService: ProductsService) { }

  ngOnInit(): void {
    this.infoUser = this.fb.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }
  onSubmit(): void {

  }
}
