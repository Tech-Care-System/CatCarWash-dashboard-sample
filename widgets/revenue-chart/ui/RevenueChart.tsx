import React from 'react';
import { Card } from '../../../shared/ui';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';

const hourlyData = [
  { time: '00:00', value: 120 }, { time: '01:00', value: 80 }, { time: '02:00', value: 40 },
  { time: '03:00', value: 20 }, { time: '04:00', value: 0 }, { time: '05:00', value: 50 },
  { time: '06:00', value: 150 }, { time: '07:00', value: 300 }, { time: '08:00', value: 650 },
  { time: '09:00', value: 800 }, { time: '10:00', value: 1100 }, { time: '11:00', value: 1450 },
  { time: '12:00', value: 1600 }, { time: '13:00', value: 1300 }, { time: '14:00', value: 1200 },
  { time: '15:00', value: 950 }, { time: '16:00', value: 800 }, { time: '17:00', value: 1500 },
  { time: '18:00', value: 1800 }, { time: '19:00', value: 1650 }, { time: '20:00', value: 1200 },
  { time: '21:00', value: 800 }, { time: '22:00', value: 400 }, { time: '23:00', value: 200 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#222] border border-white/10 p-2 rounded shadow-xl">
        <p className="text-text-secondary text-xs mb-1">{label}</p>
        <p className="text-white font-bold text-sm">฿ {payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export const RevenueChart: React.FC = () => {
  return (
    <Card className="bg-[#222] border-white/5 mb-6 p-6" noPadding>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Revenue Analytics</h3>
          <p className="text-sm text-text-secondary">Hourly breakdown for today</p>
        </div>
        <div className="flex bg-[#1A1A1A] p-1 rounded-lg border border-white/5 mt-4 sm:mt-0">
          {['Today', '7 Days', '30 Days', 'Custom'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${i === 0 ? 'bg-[#333] text-white shadow-sm' : 'text-gray-500 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={hourlyData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#666" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              interval={2}
            />
            <YAxis 
              stroke="#666" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `฿${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Peak Hours Highlights */}
            <ReferenceArea x1="11:00" x2="14:00" fill="#FF6B00" fillOpacity={0.05} />
            <ReferenceArea x1="17:00" x2="20:00" fill="#FF6B00" fillOpacity={0.05} />

            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#FF6B00" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};