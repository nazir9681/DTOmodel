import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePaymentComponent } from './create-payment/create-payment.component';

const routes: Routes = [
  { path: 'create-payment', component: CreatePaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
