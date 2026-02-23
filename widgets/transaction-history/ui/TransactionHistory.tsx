import React from 'react';
import { Card } from '../../../shared/ui';
import { CheckCircle2 } from 'lucide-react';

const transactions = [
  { id: 1, time: '18:14', branch: 'พุทธมณฑล สาย 4', machine: 'M-01', type: 'Full Wash', amount: 50, payment: 'QR Code', status: 'Complete' },
  { id: 2, time: '18:11', branch: 'ศาลายา', machine: 'M-02', type: 'Foam + Rinse', amount: 30, payment: 'Coins', status: 'Complete' },
  { id: 3, time: '18:08', branch: 'มหาชัย', machine: 'M-03', type: 'Full Wash + Wax', amount: 70, payment: 'Bills', status: 'Complete' },
  { id: 4, time: '18:02', branch: 'บางแค', machine: 'M-01', type: 'Vacuum Only', amount: 20, payment: 'Coins', status: 'Complete' },
  { id: 5, time: '17:55', branch: 'พุทธมณฑล สาย 4', machine: 'M-02', type: 'Foam + Rinse', amount: 30, payment: 'QR Code', status: 'Complete' },
  { id: 6, time: '17:48', branch: 'รังสิต', machine: 'M-04', type: 'Water Rinse', amount: 10, payment: 'Coins', status: 'Complete' },
  { id: 7, time: '17:42', branch: 'มหาชัย', machine: 'M-01', type: 'Full Wash', amount: 50, payment: 'Bills', status: 'Complete' },
  { id: 8, time: '17:35', branch: 'ศาลายา', machine: 'M-03', type: 'Vacuum Only', amount: 10, payment: 'Coins', status: 'Complete' },
];

export const TransactionHistory: React.FC = () => {
  return (
    <Card className="bg-[#222] border-white/5 overflow-hidden" noPadding>
      <div className="p-6 pb-4 border-b border-white/5">
        <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1e1e1e] text-xs uppercase text-gray-500 font-semibold tracking-wider">
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Branch</th>
              <th className="px-6 py-4">Machine</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4 text-right">Amount</th>
              <th className="px-6 py-4">Payment</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-white/5">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-mono text-text-secondary">{tx.time}</td>
                <td className="px-6 py-4 text-white font-medium">{tx.branch}</td>
                <td className="px-6 py-4 text-text-secondary">{tx.machine}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
                    tx.type.includes('Wash') ? 'bg-blue-900/20 text-blue-400 border-blue-900/30' :
                    tx.type.includes('Vacuum') ? 'bg-gray-700/20 text-gray-400 border-gray-700/30' :
                    'bg-primary/10 text-primary border-primary/20'
                  }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-mono text-white">฿ {tx.amount}</td>
                <td className="px-6 py-4 text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      tx.payment === 'QR Code' ? 'bg-[#CC5500]' :
                      tx.payment === 'Bills' ? 'bg-white' : 'bg-primary'
                    }`}></span>
                    {tx.payment}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-success text-xs font-medium">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {tx.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-white/5 text-center">
        <button className="text-sm text-text-secondary hover:text-primary transition-colors font-medium">View All Transactions →</button>
      </div>
    </Card>
  );
};