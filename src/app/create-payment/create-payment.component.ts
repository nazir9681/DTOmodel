import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { validateDOB } from './../shared/expire-validator';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Payment } from './../models/payment.model'
import * as PaymentActions from './../actions/payment.actions';
import { Router } from '@angular/router';

import {PaymentService } from './../payment.service';

import { NotificationService } from './../notification.service'

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  get creditCardNumber() {
    return this.paymentForm.get('creditCardNumber')
  }

  get cardHolderName() {
    return this.paymentForm.get('cardHolderName')
  }

  get expirationDate() {
    return this.paymentForm.get('expirationDate')
  }

  get securityCode() {
    return this.paymentForm.get('securityCode')
  }

  get amount() {
    return this.paymentForm.get('amount')
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private _paymentService :PaymentService, private notifyService : NotificationService) { }

  paymentForm = this.fb.group({
    creditCardNumber: ['', Validators.required],
    cardHolderName: ['', Validators.required],
    expirationDate: ['', [Validators.required, validateDOB]],
    securityCode: ['',[Validators.minLength(3),Validators.maxLength(3)]],
    amount: ['', [Validators.required, Validators.min(1)]],
  });

  onSuccess(){
    this.notifyService.showSuccess("Payment Successfully Done.", "Success..!!");
  }

  onError(){
    this.notifyService.showError("Something Went Wrong..", "Failed..!!");
  }

  backHome(){
    this.router.navigate(['/']);
  }

  payByNgrx(){
    this.store.dispatch(new PaymentActions.AddPayment(this.paymentForm.value) );
  }

  onSubmit(){
    this._paymentService.payment(this.paymentForm.value).subscribe(
      response => {(this.payByNgrx(),this.backHome(), this.onSuccess(), console.log('Success') )},
      error => {(this.backHome(), this.onError(),console.error('Error') )}
    );
  }


  ngOnInit(): void {
  }

}
