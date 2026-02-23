import React from 'react';
import { Card } from '../../../shared/ui';
import { PressureGauge } from '../../../entities/machine';
import { RefreshCw } from 'lucide-react';

export const MachinePressure: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Air Pressure */}
      <Card className="flex flex-col items-center justify-center py-6 bg-[#222] border-primary/10">
        <PressureGauge 
          label="Air Pressure" 
          value={6.2} 
          max={10} 
          minNormal={4} 
          maxNormal={8} 
          unit="Bar" 
        />
        <p className="text-sm text-success font-medium mt-2">6.2 bar — Normal</p>
      </Card>

      {/* High Pressure Water */}
      <Card className="flex flex-col items-center justify-center py-6 bg-[#222] border-primary/10">
        <PressureGauge 
          label="High Pressure Water" 
          value={118} 
          max={140} 
          minNormal={100} 
          maxNormal={120} 
          unit="Bar" 
        />
        <p className="text-sm text-success font-medium mt-2">118 bar — Normal</p>
      </Card>

      {/* Vacuum Pump */}
      <Card className="flex flex-col justify-center p-6 bg-[#222] border-primary/10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="p-2 bg-primary/10 rounded-lg mr-3">
              <RefreshCw className="w-5 h-5 text-primary animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-white font-medium">Vacuum Pump</h4>
              <p className="text-xs text-text-secondary">Motor Load</p>
            </div>
          </div>
          <span className="px-2 py-1 text-xs font-bold text-success bg-success/10 border border-success/20 rounded">
            Running
          </span>
        </div>

        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-white font-bold">65%</span>
            <span className="text-gray-500">Peak 82%</span>
          </div>
          <div className="h-3 bg-[#333] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-orange-400 w-[65%] rounded-full relative">
               <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/50"></div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#333] flex justify-between text-xs">
           <span className="text-text-secondary">Runtime today</span>
           <span className="text-white font-mono">4h 23m</span>
        </div>
      </Card>
    </div>
  );
};