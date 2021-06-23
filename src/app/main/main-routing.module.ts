import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CartComponent} from './cart/cart.component';
import {ColectionComponent} from './colection/colection.component';
import {HomeComponent} from './home/home.component';
import {ProductMenComponent} from './product-men/product-men.component';
import {ProductWomenComponent} from './product-women/product-women.component';
import {NewsComponent} from './news/news.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {UserInfomationComponent} from './user-infomation/user-infomation.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'productmen',
        component: ProductMenComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'colection',
        loadChildren: () => import('./colection/colection.module').then(m => m.ColectionModule)
      },
      {
        path: 'productwomen',
        component: ProductWomenComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'productmen/:id',
        component: ProductDetailComponent
      },
      {
        path: 'infomation',
        component: UserInfomationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
