import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../../main/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  checkMesage(): boolean{
    if (localStorage.getItem('message') === 'true'){
      return true;
    }else{
      return false;
    }
  }

  Sigout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('message');
  }
}
