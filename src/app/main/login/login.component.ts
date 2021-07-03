import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/service/user.service';
import { ProductsService } from '../../share/service/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkLogin = false;
  User: any;
  model: any = {};
  Username: any;
  checkOut: any;

  constructor(private userService: UserService,
              private router: Router,
              private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.userService.Login().subscribe(user => {
      console.log(user);
      this.User = user || [];
      console.log(this.model.username);
    });
  }
  Login(): any {
    const element: HTMLElement = document.getElementById('errpw') as HTMLElement;
    if (!this.regexUsername() || !this.regexPassword()){
      return false;
    }
    const username = this.User.filter((item: { email: string; }) => item.email === this.model.username);
    this.Username = username;
    localStorage.clear();
    if (username){
      const password = this.Username.filter((item: { password: string; }) => item.password === this.model.password);
      if (password.length !== 0){
        this.checkLogin = true;
        console.log('success');
        password.map((item: {id: number; }) => localStorage.setItem('token', JSON.stringify(item.id)));
        localStorage.setItem('message', 'true');
        window.location.href = '/home';
        if (localStorage.getItem('message') === 'true'){
        }
      }else {
        element.innerHTML = 'Incorrect password please try again';
        return false;
      }
    }
  }
  regexUsername(): boolean{
    const element: HTMLElement = document.getElementById('errun') as HTMLElement;
    const regex = /^[\w]+\@(gmail)\.(com)$/;
    if (this.model.username === undefined){
      element.innerHTML = 'Username cannot be left blank';
      return false;
    }else if (regex.test(this.model.username)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Username is wrong format';
      return false;
    }
  }

  regexPassword(): boolean{
    const element: HTMLElement = document.getElementById('errpw') as HTMLElement;
    const regex = /^[\w\+!@#$%^&*()]+$/;
    if (this.model.password === undefined){
      element.innerHTML = 'Password cannot be left blank';
      return false;
    }else if (regex.test(this.model.password)){
      element.innerHTML = '(*)';
      return true;
    }else{
      element.innerHTML = 'Password must be 8-20 characters';
      return false;
    }
  }
}
