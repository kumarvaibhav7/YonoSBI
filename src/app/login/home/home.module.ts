import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HomedataComponent } from './homedata/homedata.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositComponent } from './deposit/deposit.component';
import { StatementComponent } from './statement/statement.component';
import { RequestComponent } from './request/request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreditapplyComponent } from './request/creditapply/creditapply.component';
import { BranchchangeComponent } from './request/branchchange/branchchange.component'




@NgModule({
  declarations: [
    HomepageComponent,
    HomedataComponent,
    ProfileComponent,
    DepositComponent,
    StatementComponent,
    RequestComponent,
    CreditapplyComponent,
    BranchchangeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
