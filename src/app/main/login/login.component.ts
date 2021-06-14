import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/service/user.service';
import { ProductsService } from '../../share/service/products.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

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
    });
  }
  Login(): void {
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
        console.log(this.checkOut);
        if (localStorage.getItem('message') === 'true'){
        }
      }else {
        console.log('ERRO: fail');
      }
    }
  }
}
