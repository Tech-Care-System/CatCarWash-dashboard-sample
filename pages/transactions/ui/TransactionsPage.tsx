import React from 'react';
import { TransactionStats } from '../../../widgets/transaction-stats';
import { RevenueChart } from '../../../widgets/revenue-chart';
import { PaymentBreakdown } from '../../../widgets/payment-breakdown';
import { BranchRevenue } from '../../../widgets/branch-revenue';
import { TransactionHistory } from '../../../widgets/transaction-history';
import { Calendar, Download } from 'lucide-react';

export const TransactionsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
        <div>
           <h2 className="text-2xl font-bold text-white tracking-tight">Transactions</h2>
           <p className="text-text-secondary text-sm">Revenue tracking and payment analytics</p>
        </div>
        <div className="flex items-center gap-3">
           {/* Date Picker Mock */}
           <button className="flex items-center bg-[#222] border border-[#333] text-white px-3 py-2 rounded-lg text-sm hover:border-primary/50 transition-colors">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              Today: 7 Feb 2026
           </button>
           
           {/* Export Button */}
           <button className="flex items-center bg-transparent border border-primary text-primary px-3 py-2 rounded-lg text-sm hover:bg-primary/10 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
           </button>
        </div>
      </div>

      <TransactionStats />
      
      <RevenueChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PaymentBreakdown />
        <BranchRevenue />
      </div>

      <TransactionHistory />
    </div>
  );
};