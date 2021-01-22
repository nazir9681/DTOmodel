import { Action } from '@ngrx/store'
import { Payment } from './../models/payment.model'
import * as PaymentActions from './../actions/payment.actions'

const initialState: Payment = {
    creditCardNumber: '12354',
    cardHolderName: 'nazir',
    expirationDate: '2021-01-23',
    securityCode: '123',
    amount: '200',
}

export function reducer(state: Payment[] = [initialState], action: PaymentActions.Actions) {

    switch(action.type) {
        case PaymentActions.ADD_PAYMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}