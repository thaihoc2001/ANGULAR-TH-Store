import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ColectionComponent } from './colection/colection.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductMenComponent } from './product-men/product-men.component';
import { ProductWomenComponent } from './product-women/product-women.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    ColectionComponent,
    LoginComponent,
    RegisterComponent,
    ProductMenComponent,
    ProductWomenComponent,
    ProductDetailComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxPaginationModule
  ]
})
export class MainModule { }