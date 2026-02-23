import React from 'react';
import { Card } from '../../../shared/ui';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'สาขามหาชัย', value: 5210 },
  { name: 'สาขาพุทธมณฑล สาย 4', value: 4520 },
  { name: 'สาขาศาลายา', value: 3180 },
  { name: 'สาขาบางแค', value: 2890 },
  { name: 'สาขารังสิต', value: 1710 },
];

export const BranchRevenue: React.FC = () => {
  return (
    <Card className="bg-[#222] border-white/5 h-full p-6" noPadding>
      <h3 className="text-lg font-bold text-white mb-4">Revenue by Branch</h3>
      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
             <XAxis type="number" hide />
             <YAxis 
                type="category" 
                dataKey="name" 
                width={120}
                tick={{ fill: '#888', fontSize: 11 }}
                tickLine={false}
                axisLine={false}
             />
             <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333', borderRadius: '8px' }}
                formatter={(value: number) => [`฿ ${value.toLocaleString()}`, 'Revenue']}
             />
             <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                {data.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={index === 0 ? '#FF6B00' : '#444'} />
                ))}
             </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center">
         <button className="text-xs text-primary hover:text-white transition-colors">View All Branches →</button>
      </div>
    </Card>
  );
};