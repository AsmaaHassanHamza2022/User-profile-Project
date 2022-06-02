import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
   
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ]
})
export class CoreModule { }
