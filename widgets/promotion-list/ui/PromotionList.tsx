import React from 'react';
import { Card } from '../../../shared/ui';
import { Calendar, Users, BarChart3, Pause, Edit, Trash2, Clock, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const redemptionData = [
  { day: 'M', value: 12 },
  { day: 'T', value: 18 },
  { day: 'W', value: 15 },
  { day: 'T', value: 22 },
  { day: 'F', value: 28 },
  { day: 'S', value: 35 },
  { day: 'S', value: 26 },
];

export const PromotionList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      
      {/* Card 1: Happy Hour */}
      <Card noPadding className="bg-[#222] border-primary/20 overflow-hidden relative group h-full">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-400"></div>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <h3 className="text-xl font-bold text-white">Happy Hour — ลด 20%</h3>
                 <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-success text-black uppercase tracking-wide">Active</span>
               </div>
               <p className="text-primary text-sm font-medium">20% off all services</p>
             </div>
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <Clock className="w-5 h-5 text-primary" />
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
             <div className="space-y-2">
                <div className="text-text-secondary flex items-center gap-2">
                   <Clock className="w-4 h-4" />
                   Weekdays 13:00-15:00
                </div>
                <div className="text-text-secondary flex items-center gap-2">
                   <Calendar className="w-4 h-4" />
                   1 Feb - 28 Feb 2026
                </div>
                <div className="text-text-secondary flex items-center gap-2">
                   <Users className="w-4 h-4" />
                   All branches
                </div>
             </div>
             <div>
                <div className="text-xs text-text-secondary mb-1">Daily Redemptions (7 Days)</div>
                <div className="h-12 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={redemptionData}>
                      <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                        {redemptionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 6 ? '#FF6B00' : '#444'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-xs mt-1">
                   <span className="text-text-secondary">156 total</span>
                   <span className="text-white font-medium">12 today</span>
                </div>
             </div>
          </div>

          <div className="flex gap-2 pt-4 border-t border-white/5 mt-auto">
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <Edit className="w-3 h-3" /> Edit
             </button>
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <Pause className="w-3 h-3" /> Pause
             </button>
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <BarChart3 className="w-3 h-3" /> Analytics
             </button>
          </div>
        </div>
      </Card>

      {/* Card 2: New Member */}
      <Card noPadding className="bg-[#222] border-white/5 overflow-hidden h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <h3 className="text-lg font-bold text-white">สมาชิกใหม่ — ล้างฟรี 1 ครั้ง</h3>
                 <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-success/20 text-success border border-success/20 uppercase tracking-wide">Active</span>
               </div>
               <p className="text-text-secondary text-sm">Free 1 Basic Wash for new QR registrations</p>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
             <div className="space-y-2">
                <div className="text-text-secondary flex items-center gap-2">
                   <Calendar className="w-4 h-4" />
                   1 Jan - 31 Mar 2026
                </div>
                <div className="text-text-secondary flex items-center gap-2">
                   <Users className="w-4 h-4" />
                   All branches
                </div>
             </div>
             <div className="flex flex-col justify-end">
                <div className="text-3xl font-bold text-white">89</div>
                <div className="text-xs text-text-secondary">Total Redemptions (5 today)</div>
             </div>
          </div>

          <div className="flex gap-2 pt-4 border-t border-white/5 mt-auto">
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <Edit className="w-3 h-3" /> Edit
             </button>
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <Pause className="w-3 h-3" /> Pause
             </button>
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <BarChart3 className="w-3 h-3" /> Analytics
             </button>
          </div>
        </div>
      </Card>

      {/* Card 3: Loyalty */}
      <Card noPadding className="bg-[#222] border-white/5 overflow-hidden h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <h3 className="text-lg font-bold text-white">Loyalty — ล้างครบ 10 ฟรี 1</h3>
                 <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-success/20 text-success border border-success/20 uppercase tracking-wide">Active</span>
               </div>
               <p className="text-text-secondary text-sm">11th wash free (stamp card digital)</p>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
             <div className="space-y-2">
                <div className="text-text-secondary flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-primary" />
                   Ongoing (no end date)
                </div>
                <div className="text-text-secondary flex items-center gap-2">
                   <Users className="w-4 h-4" />
                   342 Active members
                </div>
             </div>
             <div className="flex flex-col justify-end">
                <div className="text-3xl font-bold text-white">18</div>
                <div className="text-xs text-text-secondary">Completions this month</div>
             </div>
          </div>

          <div className="flex gap-2 pt-4 border-t border-white/5 mt-auto">
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <Edit className="w-3 h-3" /> Edit
             </button>
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <Pause className="w-3 h-3" /> Pause
             </button>
             <button className="flex-1 py-2 rounded bg-[#333] hover:bg-[#444] text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <BarChart3 className="w-3 h-3" /> Analytics
             </button>
          </div>
        </div>
      </Card>

      {/* Card 4: Songkran Special */}
      <Card noPadding className="bg-[#1e1e1e] border-white/5 overflow-hidden opacity-80 hover:opacity-100 transition-opacity h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <h3 className="text-lg font-bold text-gray-300">Songkran Special</h3>
                 <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-700 text-gray-300 border border-gray-600 uppercase tracking-wide">Scheduled</span>
               </div>
               <p className="text-gray-500 text-sm">30% off Full Wash + Wax</p>
             </div>
          </div>

          <div className="space-y-2 mb-6 text-sm">
             <div className="text-gray-500 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                13-15 Apr 2026
             </div>
             <div className="text-gray-500 flex items-center gap-2">
                <Users className="w-4 h-4" />
                All branches
             </div>
             <div className="text-primary text-xs font-medium mt-2">
                Starts in 65 days
             </div>
          </div>

          <div className="flex gap-2 pt-4 border-t border-white/5 mt-auto">
             <button className="flex-1 py-2 rounded bg-[#2a2a2a] hover:bg-[#333] text-gray-300 text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <Edit className="w-3 h-3" /> Edit
             </button>
             <button className="flex-1 py-2 rounded bg-[#2a2a2a] hover:bg-red-900/30 text-gray-300 hover:text-red-400 text-xs font-medium transition-colors flex items-center justify-center gap-2">
                <Trash2 className="w-3 h-3" /> Delete
             </button>
          </div>
        </div>
      </Card>

    </div>
  );
};