import React from 'react';
import { Balance as BalanceType } from '../types/wallet';
import { formatCurrency } from '../utils/formatters';
import { WalletIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';

interface BalanceProps {
  balance: BalanceType;
}

export const Balance: React.FC<BalanceProps> = ({ balance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <WalletIcon className="text-blue-500" />
          <h3 className="text-gray-600 font-medium">Total Balance</h3>
        </div>
        <p className="text-2xl font-bold text-gray-900">{formatCurrency(balance.total)}</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <TrendingUpIcon className="text-green-500" />
          <h3 className="text-gray-600 font-medium">Income</h3>
        </div>
        <p className="text-2xl font-bold text-green-600">{formatCurrency(balance.income)}</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <TrendingDownIcon className="text-red-500" />
          <h3 className="text-gray-600 font-medium">Expenses</h3>
        </div>
        <p className="text-2xl font-bold text-red-600">{formatCurrency(balance.expenses)}</p>
      </div>
    </div>
  );
};