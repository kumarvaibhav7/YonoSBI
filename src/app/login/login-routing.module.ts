import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccCreateComponent } from './acc-create/acc-create.component';

const routes: Routes = [
  {path:"createAccount",component:AccCreateComponent},
  {path:":id/home",loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
