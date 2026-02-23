import React from 'react';
import { Card } from '../../../shared/ui';
import { Coins, TrendingUp, Target, Activity, ArrowUpRight } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const sparkData = [
  { v: 4000 }, { v: 3000 }, { v: 5000 }, { v: 2780 }, { v: 6890 }, { v: 8390 }, { v: 7490 }
];

export const TransactionStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {/* Card 1: Today's Revenue */}
      <Card noPadding className="p-6 bg-[#222] border-white/5 relative overflow-hidden">
        <div className="flex justify-between items-start mb-2">
           <div>
             <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Today's Revenue</p>
             <h3 className="text-2xl font-bold text-white mt-1">฿ 13,510</h3>
           </div>
           <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
             <Coins className="w-5 h-5 text-primary" />
           </div>
        </div>
        <div className="flex items-center text-xs text-success">
           <ArrowUpRight className="w-3 h-3 mr-1" />
           <span className="font-medium">+12% vs yesterday</span>
        </div>
      </Card>

      {/* Card 2: This Week */}
      <Card noPadding className="p-6 bg-[#222] border-white/5">
        <div className="flex justify-between items-start">
           <div>
             <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">This Week</p>
             <h3 className="text-2xl font-bold text-white mt-1">฿ 89,240</h3>
           </div>
           <div className="h-10 w-20">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={sparkData}>
                    <Line type="monotone" dataKey="v" stroke="#FF6B00" strokeWidth={2} dot={false} />
                 </LineChart>
              </ResponsiveContainer>
           </div>
        </div>
        <div className="flex items-center text-xs text-text-secondary mt-1">
           <TrendingUp className="w-3 h-3 mr-1 text-primary" />
           <span>7-day trend</span>
        </div>
      </Card>

      {/* Card 3: This Month Target */}
      <Card noPadding className="p-6 bg-[#222] border-white/5">
        <div className="flex justify-between items-start mb-2">
           <div>
             <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">This Month</p>
             <h3 className="text-2xl font-bold text-white mt-1">฿ 342,180</h3>
           </div>
           <div className="p-2 bg-[#333] rounded-lg border border-white/5">
             <Target className="w-5 h-5 text-gray-400" />
           </div>
        </div>
        <div className="w-full bg-[#333] h-1.5 rounded-full overflow-hidden mb-1">
           <div className="bg-gradient-to-r from-primary to-warning h-full rounded-full" style={{ width: '86%' }}></div>
        </div>
        <div className="flex justify-between text-[10px] text-text-secondary">
           <span>86% of target</span>
           <span>Goal: ฿ 400k</span>
        </div>
      </Card>

      {/* Card 4: Avg per Session */}
      <Card noPadding className="p-6 bg-[#222] border-white/5">
        <div className="flex justify-between items-start mb-2">
           <div>
             <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Avg per Session</p>
             <h3 className="text-2xl font-bold text-white mt-1">฿ 39.50</h3>
           </div>
           <div className="p-2 bg-[#333] rounded-lg border border-white/5">
             <Activity className="w-5 h-5 text-gray-400" />
           </div>
        </div>
        <div className="flex items-center text-xs text-text-secondary">
           <span className="text-success font-medium mr-1">▲ ฿ 0.50</span>
           <span>vs last month</span>
        </div>
      </Card>
    </div>
  );
};