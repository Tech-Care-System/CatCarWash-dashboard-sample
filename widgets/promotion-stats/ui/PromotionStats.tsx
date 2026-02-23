import React from 'react';
import { Card } from '../../../shared/ui';
import { Megaphone, Ticket, TrendingUp, ArrowUpRight } from 'lucide-react';

export const PromotionStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Active Promotions */}
      <Card noPadding className="p-5 bg-[#222] border-white/5 relative overflow-hidden">
        <div className="flex justify-between items-start mb-2">
           <div>
             <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Active Promotions</p>
             <h3 className="text-3xl font-bold text-white mt-2">3</h3>
           </div>
           <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
             <Megaphone className="w-6 h-6 text-primary" />
           </div>
        </div>
        <div className="mt-2">
           <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success/10 text-success border border-success/20">
             <span className="w-1.5 h-1.5 rounded-full bg-success mr-1.5 animate-pulse"></span>
             Running
           </span>
        </div>
      </Card>

      {/* Redemptions Today */}
      <Card noPadding className="p-5 bg-[#222] border-white/5">
        <div className="flex justify-between items-start mb-2">
           <div>
             <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Redemptions Today</p>
             <h3 className="text-3xl font-bold text-white mt-2">28</h3>
           </div>
           <div className="p-3 bg-[#333] rounded-xl border border-white/5">
             <Ticket className="w-6 h-6 text-gray-400" />
           </div>
        </div>
        <div className="flex items-center text-xs text-success mt-2">
           <ArrowUpRight className="w-3 h-3 mr-1" />
           <span className="font-medium">+8 vs yesterday</span>
        </div>
      </Card>

      {/* Revenue from Promos */}
      <Card noPadding className="p-5 bg-[#222] border-white/5">
        <div className="flex justify-between items-start mb-2">
           <div>
             <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Revenue from Promos</p>
             <h3 className="text-3xl font-bold text-white mt-2">฿ 2,340</h3>
           </div>
           <div className="p-3 bg-[#333] rounded-xl border border-white/5">
             <TrendingUp className="w-6 h-6 text-gray-400" />
           </div>
        </div>
        <div className="mt-2 text-xs text-text-secondary">
           <span className="text-white font-medium">17%</span> of today's total
        </div>
      </Card>
    </div>
  );
};