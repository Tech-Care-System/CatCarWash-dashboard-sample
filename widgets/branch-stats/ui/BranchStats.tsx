import React from 'react';
import { Card } from '../../../shared/ui';
import { MapPin, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export const BranchStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <Card noPadding className="p-4 flex flex-row items-center justify-between bg-[#222] border-white/5">
        <div>
          <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Total Branches</p>
          <p className="text-2xl font-bold text-white mt-1">24</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
      </Card>

      <Card noPadding className="p-4 flex flex-row items-center justify-between bg-[#222] border-white/5">
        <div>
          <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Online</p>
          <p className="text-2xl font-bold text-white mt-1">18</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center border border-success/20">
          <CheckCircle2 className="w-5 h-5 text-success" />
        </div>
      </Card>

      <Card noPadding className="p-4 flex flex-row items-center justify-between bg-[#222] border-white/5">
        <div>
          <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Offline</p>
          <p className="text-2xl font-bold text-white mt-1">4</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
          <XCircle className="w-5 h-5 text-gray-400" />
        </div>
      </Card>

      <Card noPadding className="p-4 flex flex-row items-center justify-between bg-[#222] border-white/5 relative overflow-hidden">
        {/* Subtle red glow background */}
        <div className="absolute right-0 top-0 w-16 h-16 bg-danger/10 blur-xl rounded-full -mr-4 -mt-4 pointer-events-none"></div>
        <div>
          <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Alerts</p>
          <p className="text-2xl font-bold text-white mt-1">2</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-danger/10 flex items-center justify-center border border-danger/20 animate-pulse">
          <AlertTriangle className="w-5 h-5 text-danger" />
        </div>
      </Card>
    </div>
  );
};