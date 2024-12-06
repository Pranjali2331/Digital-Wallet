import { useState, useCallback } from 'react';
import { Transaction, Balance } from '../types/wallet';

export const useWallet = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = useCallback((transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: crypto.randomUUID(),
    };
    setTransactions(prev => [...prev, newTransaction]);
  }, []);

  const calculateBalance = useCallback((): Balance => {
    return transactions.reduce(
      (acc, transaction) => {
        const amount = transaction.amount;
        if (transaction.type === 'income') {
          acc.income += amount;
          acc.total += amount;
        } else {
          acc.expenses += amount;
          acc.total -= amount;
        }
        return acc;
      },
      { total: 0, income: 0, expenses: 0 }
    );
  }, [transactions]);

  return {
    transactions,
    addTransaction,
    calculateBalance,
  };
};