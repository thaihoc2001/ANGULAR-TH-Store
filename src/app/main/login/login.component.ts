import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/service/user.service';
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

  constructor(private userService: UserService, private router: Router) { }

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
    if (username){
      const password = this.Username.filter((item: { password: string; }) => item.password === this.model.password);
      if (password.length !== 0){
        this.checkLogin = true;
        console.log('success');
        password.map((item: {id: number; }) => localStorage.setItem('token', JSON.stringify(item.id)));
        localStorage.setItem('message', 'true');
        }else {
          console.log('ERRO: fail');
        }
    }
  }
}
