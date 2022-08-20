import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { HomedataComponent } from './homedata/homedata.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  {path:"",component:HomepageComponent,
  children:[
    {path:"homedata",component:HomedataComponent},
    {path:"profile",component:ProfileComponent},
    {path:"deposit",component:DepositComponent},
    {path:"statement",component:StatementComponent},
    {path:"request",component:RequestComponent}]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
