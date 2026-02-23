import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../shared/ui';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const paymentHourlyData = [
  { time: '08:00', coins: 400, bills: 200, qr: 100 },
  { time: '10:00', coins: 800, bills: 400, qr: 300 },
  { time: '12:00', coins: 1200, bills: 600, qr: 400 },
  { time: '14:00', coins: 900, bills: 500, qr: 250 },
  { time: '16:00', coins: 1500, bills: 800, qr: 500 },
  { time: '18:00', coins: 2000, bills: 900, qr: 600 },
  { time: '20:00', coins: 1100, bills: 400, qr: 300 },
];

export const PaymentBreakdownCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Breakdown (Today)</CardTitle>
        <div className="text-2xl font-bold text-white mt-1">฿ 13,510</div>
      </CardHeader>
      <CardContent>
        {/* Stacked Bar Visual */}
        <div className="w-full h-4 rounded-full flex overflow-hidden mb-6">
          <div className="bg-primary w-[62%] h-full"></div>
          <div className="bg-blue-500 w-[24%] h-full"></div>
          <div className="bg-purple-500 w-[14%] h-full"></div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
              <span className="text-gray-300">Coins (62%)</span>
            </div>
            <span className="font-mono text-white">฿ 8,420</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-300">Bills (24%)</span>
            </div>
            <span className="font-mono text-white">฿ 3,200</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
              <span className="text-gray-300">QR Code (14%)</span>
            </div>
            <span className="font-mono text-white">฿ 1,890</span>
          </div>
        </div>

        <div className="h-24 w-full border-t border-[#333] pt-4">
           <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={paymentHourlyData}>
               <defs>
                 <linearGradient id="colorCoins" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.3}/>
                   <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
                 </linearGradient>
               </defs>
               <Area type="monotone" dataKey="coins" stroke="#FF6B00" strokeWidth={2} fillOpacity={1} fill="url(#colorCoins)" />
             </AreaChart>
           </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};