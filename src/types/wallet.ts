export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: Date;
}

export interface Balance {
  total: number;
  income: number;
  expenses: number;
}