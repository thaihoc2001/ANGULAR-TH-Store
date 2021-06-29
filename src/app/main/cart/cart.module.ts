import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cartItem/cartItem.component';
import { CartRoutingModule } from './cart-routing.module';
import { PayCartComponent } from './pay-cart/pay-cart.component';
import { InfoCartComponent } from './info-cart/info-cart.component';


@NgModule({
  declarations: [
    CartItemComponent,
    PayCartComponent,
    InfoCartComponent,

  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
