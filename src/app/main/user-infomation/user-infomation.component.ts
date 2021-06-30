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
      this.model = res;
    });
  }
  updateInfo(): any{
    if (!this.regexName() || !this.regexAddress() || !this.regexPhone() || !this.regexEmail()){
      alert('Please, come back later');
      return false;
    }
    this.infoUser = {
      name: this.model.name,
      address: this.model.address,
      phone: this.model.phone,
      email: this.model.email,
      password: this.model.password
    };
    this.userService.putInfoUser(this.infoUser, this.id).subscribe(res => {
      console.log(res);
      console.log('success');
    });
  }
  regexName(): boolean{
    const element: HTMLElement = document.getElementById('errname') as HTMLElement;
    const regex = /^[A-Za-z\s]+$/;
    if (this.model.name === undefined){
      element.innerHTML = 'Name cannot be left blank';
      return false;
    }else if (regex.test(this.model.name)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Name is wrong format';
      return false;
    }
  }

  regexAddress(): boolean{
    const element: HTMLElement = document.getElementById('erraddress') as HTMLElement;
    const regex = /^[A-Za-z\d\s\-]+$/;
    if (this.model.address === undefined){
      element.innerHTML = 'Address cannot be left blank';
      return false;
    }else if (regex.test(this.model.address)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Address is wrong format';
      return false;
    }
  }

  regexPhone(): boolean{
    const element: HTMLElement = document.getElementById('errphone') as HTMLElement;
    const regex = /^(0)\d{9}$/;
    if (this.model.phone === undefined){
      element.innerHTML = 'Phone cannot be left blank';
      return false;
    }else if (regex.test(this.model.phone)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Phone is wrong format';
      return false;
    }
  }

  regexEmail(): boolean{
    const element: HTMLElement = document.getElementById('erremail') as HTMLElement;
    const regex = /^[\w]+\@(gmail)\.(com)$/;
    if (this.model.email === undefined){
      element.innerHTML = 'Phone cannot be left blank';
      return false;
    }else if (regex.test(this.model.email)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Phone is wrong format';
      return false;
    }
  }
}
