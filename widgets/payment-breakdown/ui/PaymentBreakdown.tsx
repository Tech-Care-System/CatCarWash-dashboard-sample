import React from 'react';
import { Card } from '../../../shared/ui';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Coins', value: 8420, color: '#FF6B00' },
  { name: 'Bills', value: 3200, color: '#FFFFFF' },
  { name: 'QR Code', value: 1890, color: '#CC5500' },
];

export const PaymentBreakdown: React.FC = () => {
  return (
    <Card className="bg-[#222] border-white/5 h-full p-6" noPadding>
      <h3 className="text-lg font-bold text-white mb-4">Payment Breakdown</h3>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="h-[180px] w-[180px] relative">
           <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                 <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                 >
                    {data.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                 </Pie>
                 <Tooltip 
                    contentStyle={{ backgroundColor: '#222', borderColor: '#333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: number) => `฿ ${value.toLocaleString()}`}
                 />
              </PieChart>
           </ResponsiveContainer>
           {/* Center Text */}
           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-text-secondary text-xs">Total</span>
              <span className="text-white font-bold">฿ 13.5k</span>
           </div>
        </div>

        <div className="flex-1 space-y-4 w-full">
           {/* Coins */}
           <div>
              <div className="flex justify-between items-center text-sm mb-1">
                 <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <span className="text-white">Coins (62%)</span>
                 </div>
                 <span className="font-mono text-white">฿ 8,420</span>
              </div>
              <p className="text-[10px] text-text-secondary pl-5">
                 ฿1 (320) · ฿2 (480) · ฿5 (1,240) · ฿10 (6,380)
              </p>
           </div>

           {/* Bills */}
           <div>
              <div className="flex justify-between items-center text-sm mb-1">
                 <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                    <span className="text-white">Bills (24%)</span>
                 </div>
                 <span className="font-mono text-white">฿ 3,200</span>
              </div>
              <p className="text-[10px] text-text-secondary pl-5">
                 ฿20 (400) · ฿50 (800) · ฿100 (2,000)
              </p>
           </div>

           {/* QR */}
           <div>
              <div className="flex justify-between items-center text-sm mb-1">
                 <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#CC5500] mr-2"></div>
                    <span className="text-white">QR Code (14%)</span>
                 </div>
                 <span className="font-mono text-white">฿ 1,890</span>
              </div>
              <p className="text-[10px] text-text-secondary pl-5">
                 48 transactions
              </p>
           </div>
        </div>
      </div>
    </Card>
  );
};