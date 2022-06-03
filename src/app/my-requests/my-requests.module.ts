import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRequestsRoutingModule } from './my-requests-routing.module';
import { RequestsTableComponent } from './components/requests-table/requests-table.component';
import { RequestsStatusComponent } from './components/requests-status/requests-status.component';
import { RequestsPageComponent } from './components/requests-page/requests-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
   
  
    RequestsTableComponent,
           RequestsStatusComponent,
           RequestsPageComponent
  ],
  imports: [
    CommonModule,
    MyRequestsRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
    
  ]
})
export class MyRequestsModule { }
