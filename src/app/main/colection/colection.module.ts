import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColectionRoutingModule } from './colection-routing.module';
import { SummeressentialsComponent } from './summeressentials/summeressentials.component';
import { Summer2021Component } from './summer2021/summer2021.component';
import { SpringComponent } from './spring/spring.component';
import { TheiconComponent } from './theicon/theicon.component';
import { PrespringComponent } from './prespring/prespring.component';

@NgModule({
  declarations: [
    SummeressentialsComponent,
    Summer2021Component,
    SpringComponent,
    TheiconComponent,
    PrespringComponent
  ],
  imports: [
    CommonModule,
    ColectionRoutingModule
  ]
})
export class ColectionModule { }
