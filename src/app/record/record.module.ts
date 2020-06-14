import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { RecordRoutingModule } from './record-routing.module';
import { RecordComponent } from './record.component';


@NgModule({
  declarations: [RecordComponent],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    RecordRoutingModule,
  ],
})
export class RecordModule { }
