import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Payment } from './models/payment.model';
import { AppState } from './app.state';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DTO';

  payments: Observable<Payment[]>;

  constructor(private store: Store<AppState>, public route: ActivatedRoute) { 
    this.payments = store.select('payment');
  }
}
