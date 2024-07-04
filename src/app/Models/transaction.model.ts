export interface Type{
    value: 'debit' | 'credit';
}
export class Transaction {
    constructor(
        public id:number,
        public amount: number,
        public type: Type,
        public date: Date
    ) {}
}