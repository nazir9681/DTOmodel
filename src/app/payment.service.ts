import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 
  _url = 'http://localhost:3000/pay';
  constructor(private _http: HttpClient) { }

  payment(paymentData){
    return this._http.post<any>(this._url, paymentData);

  }
}
