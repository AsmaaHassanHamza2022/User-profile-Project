import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowUserDetailsComponent } from './profile/components/show-user-details/show-user-details.component';
import { UpdateUserDetailsComponent } from './profile/components/update-user-details/update-user-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/profile',pathMatch:'full'},
  {path:'profile',component:ShowUserDetailsComponent,pathMatch:'full'},
  {path:'edit',component:UpdateUserDetailsComponent,pathMatch:'full'},
  // {path:'profile',loadChildren:()=> import('./profile/profile.module').then(module => module.ProfileModule)},
  {path:'requests',loadChildren:()=> import('./my-requests/my-requests.module').then(module => module.MyRequestsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


