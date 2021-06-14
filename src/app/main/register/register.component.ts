import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../share/service/user.service';
import {ProductsService} from '../../share/service/products.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  infoUser: any = {};
  checkOut: any = {};
  checkoutProducts: any = [];

  constructor( private fb: FormBuilder,
               private userService: UserService,
               private productsService: ProductsService) { }

  ngOnInit(): void {
    this.infoUser = this.fb.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.userService.register(
      this.infoUser.value
    ).pipe(first()).subscribe({
      next: () => {
        console.log('Đăng ký thành công');
      },
      error: erro => {
        console.log('Đăng ký thất bại');
      }
    });
  }
}
