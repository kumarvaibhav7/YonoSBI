import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccCreateComponent } from './acc-create/acc-create.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    SigninComponent,
    AccCreateComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  exports:[
    SigninComponent
  ]
})
export class LoginModule { }
