import { Component, OnInit } from '@angular/core';
import { TransactionComponent } from '../transaction/transaction.component';
import { TransactionService } from '../Services/transaction.service';
import { Transaction } from '../Models/transaction.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  transactions: Transaction[] = [];


  constructor(private transactionService: TransactionService){}

  ngOnInit(): void {
      this.transactions = this.transactionService.getTransactions();
  }

}
