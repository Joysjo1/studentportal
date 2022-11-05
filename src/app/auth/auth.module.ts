import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './component/signup/signup.component';
import { HeaderComponent } from './component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000, // 15 seconds
      progressBar: true,
    }),
  ],
  exports:[
    HeaderComponent
  ]
})
export class AuthModule { }
