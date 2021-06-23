import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from '../main.component';
import {SummeressentialsComponent} from './summeressentials/summeressentials.component';
import {Summer2021Component} from './summer2021/summer2021.component';
import {SpringComponent} from './spring/spring.component';
import {PrespringComponent} from './prespring/prespring.component';
import {TheiconComponent} from './theicon/theicon.component';
import {ColectionComponent} from './colection.component';

const routes: Routes = [
  {
    path: '',
    component: ColectionComponent,
    children: [
      {
        path: '',
        redirectTo: 'summeressentials'
      },
      {
        path: 'summeressentials',
        component: SummeressentialsComponent
      },
      {
        path: 'summer2021',
        component: Summer2021Component
      },
      {
        path: 'spring',
        component: SpringComponent
      },
      {
        path: 'theicon',
        component: TheiconComponent
      },
      {
        path: 'prespring',
        component: PrespringComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColectionRoutingModule { }
