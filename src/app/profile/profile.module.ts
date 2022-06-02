import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ShowUserDetailsComponent } from './components/show-user-details/show-user-details.component';
import { UpdateUserDetailsComponent } from './components/update-user-details/update-user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowUserDetailsComponent,
    UpdateUserDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  exports:[
    ShowUserDetailsComponent,
    UpdateUserDetailsComponent
  ]
})
export class ProfileModule { }
