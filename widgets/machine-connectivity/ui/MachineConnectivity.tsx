import React from 'react';
import { Wifi, Signal, RotateCw } from 'lucide-react';

export const MachineConnectivity: React.FC = () => {
  return (
    <div className="bg-[#222] border-t border-[#333] rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-end gap-0.5 h-4">
             <div className="w-1 h-2 bg-success rounded-sm"></div>
             <div className="w-1 h-3 bg-success rounded-sm"></div>
             <div className="w-1 h-4 bg-success rounded-sm"></div>
             <div className="w-1 h-3 bg-success rounded-sm"></div>
             <div className="w-1 h-4 bg-[#444] rounded-sm"></div>
          </div>
          <div>
            <span className="text-gray-400 text-xs block">WiFi</span>
            <span className="text-white font-medium">Connected</span>
          </div>
        </div>

        <div className="h-8 w-px bg-[#333]"></div>

        <div className="flex items-center gap-3">
          <div className="flex items-end gap-0.5 h-4">
             <div className="w-1 h-2 bg-warning rounded-sm"></div>
             <div className="w-1 h-3 bg-warning rounded-sm"></div>
             <div className="w-1 h-4 bg-warning rounded-sm"></div>
             <div className="w-1 h-3 bg-[#444] rounded-sm"></div>
             <div className="w-1 h-4 bg-[#444] rounded-sm"></div>
          </div>
          <div>
            <span className="text-gray-400 text-xs block">GSM</span>
            <span className="text-white font-medium">Standby</span>
          </div>
        </div>

        <div className="h-8 w-px bg-[#333]"></div>

        <div className="flex items-center gap-2">
           <RotateCw className="w-4 h-4 text-success animate-spin-slow" />
           <div>
             <span className="text-gray-400 text-xs block">Cloud Sync</span>
             <div className="flex items-center gap-2">
                <span className="text-white font-medium">Real-time 45ms</span>
                <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_5px_rgba(52,199,89,0.8)]"></span>
             </div>
           </div>
        </div>
      </div>

      <div className="text-xs text-text-secondary font-mono bg-[#1A1A1A] px-3 py-1.5 rounded border border-[#333]">
        Last push: 2 sec ago
      </div>
    </div>
  );
};