import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../share/service/common.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  infoUser: any = {};

  constructor( private fb: FormBuilder, private commonService: CommonService) { }

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
    this.commonService.register(
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
