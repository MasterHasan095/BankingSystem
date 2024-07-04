import { Component, Input } from '@angular/core';
import { Transaction } from '../Models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  @Input() transaction!: Transaction;
}
