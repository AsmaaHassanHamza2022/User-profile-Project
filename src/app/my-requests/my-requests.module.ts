import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRequestsRoutingModule } from './my-requests-routing.module';
import { RequestsTableComponent } from './components/requests-table/requests-table.component';
import { RequestsStatusComponent } from './components/requests-status/requests-status.component';
import { RequestsPageComponent } from './components/requests-page/requests-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';


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
    MatTableModule
  ]
})
export class MyRequestsModule { }
