import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AuthModule,
    SharedModule,
    CarouselModule
  ]
})
export class LayoutModule { }
