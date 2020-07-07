import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { AlertPageRoutingModule } from './alert-page-routing.module';
import { AlertPageComponent } from './alert-page.component';


@NgModule({
  declarations: [AlertPageComponent],
  imports: [
    CommonModule,
    ButtonModule,
    AlertPageRoutingModule,
  ]
})
export class AlertPageModule { }
