import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ColectionComponent } from './colection/colection.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductMenComponent } from './product-men/product-men.component';
import { ProductWomenComponent } from './product-women/product-women.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserInfomationComponent } from './user-infomation/user-infomation.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    HomeComponent,
    ColectionComponent,
    LoginComponent,
    RegisterComponent,
    ProductMenComponent,
    ProductWomenComponent,
    ProductDetailComponent,
    NewsComponent,
    UserInfomationComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
