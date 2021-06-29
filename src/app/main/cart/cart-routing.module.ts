import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from './cart.component';
import {CartItemComponent} from './cartItem/cartItem.component';
import {InfoCartComponent} from './info-cart/info-cart.component';
import {PayCartComponent} from './pay-cart/pay-cart.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: '',
        redirectTo: 'cartItem'
      },
      {
        path: 'cartItem',
        component: CartItemComponent
      },
      {
        path: 'infoCart',
        component: InfoCartComponent
      },
      {
        path: 'payCart',
        component: PayCartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
