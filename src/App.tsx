import React from 'react';
import { WalletIcon } from 'lucide-react';
import { useWallet } from './hooks/useWallet';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

function App() {
  const { transactions, addTransaction, calculateBalance } = useWallet();
  const balance = calculateBalance();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <WalletIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Digital Wallet</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Balance balance={balance} />
        <AddTransaction onAdd={addTransaction} />
        <TransactionList transactions={transactions} />
      </main>
    </div>
  );
}

export default App;