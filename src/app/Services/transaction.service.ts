import { Injectable } from '@angular/core';
import { Transaction, Type } from '../Models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: Transaction[] = [
    new Transaction(99,1000,{ value: 'debit' }, new Date()),
    new Transaction(98,2000,{ value: 'debit' }, new Date()),
    new Transaction(97,3000,{ value: 'debit' }, new Date()),
  ];
  private nextId: number = 1;

  constructor() { }

  getTransactions() : Transaction[]{
    return this.transactions;
  }

  addTransaction(
     amount: number,
     type: Type,
     date: Date
    ) : void{
      const transaction = new Transaction(this.nextId++, amount, type, date);
      this.transactions.push(transaction);
  }

  
}
