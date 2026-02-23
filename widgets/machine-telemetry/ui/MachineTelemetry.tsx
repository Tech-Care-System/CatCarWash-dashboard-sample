import React, { useState } from 'react';
import { Card } from '../../../shared/ui';
import { FluidGauge, PressureGauge } from '../../../entities/machine';
import { Droplets, Sparkles, Disc, Container, RefreshCw, CheckCircle2 } from 'lucide-react';

export const MachineTelemetry: React.FC = () => {
  const [activeMachine, setActiveMachine] = useState('m1');

  return (
    <Card className="mb-6" noPadding>
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b border-[#333] bg-[#252525]">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <select className="bg-[#111] border border-[#444] text-white text-sm rounded px-3 py-1.5 focus:outline-none focus:border-primary">
            <option>Branch: สาขาพุทธมณฑล สาย 4</option>
            <option>Branch: สาขาลาดพร้าว 101</option>
          </select>
          
          <div className="flex bg-[#111] rounded-lg p-1 border border-[#333]">
            <button 
              onClick={() => setActiveMachine('m1')}
              className={`px-3 py-1 text-xs font-medium rounded transition-all ${activeMachine === 'm1' ? 'bg-primary text-white shadow' : 'text-gray-500 hover:text-white'}`}
            >
              Machine 1 (Active)
            </button>
            <button 
              onClick={() => setActiveMachine('m2')}
              className={`px-3 py-1 text-xs font-medium rounded transition-all ${activeMachine === 'm2' ? 'bg-primary text-white shadow' : 'text-gray-500 hover:text-white'}`}
            >
              Machine 2 (Idle)
            </button>
            <button 
              onClick={() => setActiveMachine('m3')}
              className={`px-3 py-1 text-xs font-medium rounded transition-all ${activeMachine === 'm3' ? 'bg-danger text-white shadow' : 'text-gray-500 hover:text-white'}`}
            >
              Machine 3 (Alert)
            </button>
          </div>
        </div>

        <div className="flex items-center text-xs text-text-secondary">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse mr-2"></span>
          Last sync: 2 sec ago
        </div>
      </div>

      <div className="p-6">
        {/* Gauges Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-10 justify-items-center">
          <FluidGauge label="Foam Level" value={72} color="#FF6B00" icon={Droplets} />
          <FluidGauge label="Wax Coating" value={45} color="#FFD60A" icon={Sparkles} />
          <FluidGauge label="Tire Black" value={58} color="#FF6B00" icon={Disc} />
          <FluidGauge label="Water Supply" value={89} color="#3b82f6" icon={Droplets} />
          <FluidGauge label="Gas Cylinder" value={33} color="#FF3B30" icon={Container} threshold={35} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pressure Gauges */}
          <div className="lg:col-span-1 flex justify-around items-center border-r border-[#333] pr-4">
            <PressureGauge label="Air Pressure" value={6.2} max={10} minNormal={4} maxNormal={8} unit="Bar" />
            <PressureGauge label="High Pressure" value={118} max={140} minNormal={100} maxNormal={120} unit="Bar" />
          </div>

          {/* System Status Bars */}
          <div className="lg:col-span-2 pl-4 flex flex-col justify-center space-y-6">
            
            {/* Vacuum Pump */}
            <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#333]">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <RefreshCw className="w-4 h-4 text-primary mr-2 animate-spin-slow" />
                  <span className="text-sm font-medium text-white">Vacuum Pump (ดูดฝุ่น)</span>
                </div>
                <span className="text-xs text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">Running</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-[#333] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary/60 to-primary w-[65%] rounded-full relative">
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
                  </div>
                </div>
                <span className="text-sm font-mono text-white w-12 text-right">65%</span>
              </div>
              <div className="mt-2 text-[10px] text-text-secondary flex justify-between">
                <span>Motor Load</span>
                <span>Runtime today: 4h 23m</span>
              </div>
            </div>

            {/* Other Systems Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Foam Concentration */}
              <div className="bg-[#1A1A1A] p-3 rounded-lg border border-[#333]">
                <div className="text-xs text-text-secondary mb-2">Foam Concentration</div>
                <div className="relative h-8 bg-[#222] rounded flex items-center px-2">
                   <div className="absolute left-2 right-2 h-1 bg-gray-700 rounded-full top-1/2 transform -translate-y-1/2"></div>
                   <div className="absolute left-[30%] right-[30%] h-1 bg-green-900/50 rounded-full top-1/2 transform -translate-y-1/2"></div>
                   <div className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-white cursor-pointer"></div>
                </div>
                <div className="text-center text-xs text-success mt-1">Optimal Mix</div>
              </div>

              {/* Water Filtration */}
              <div className="bg-[#1A1A1A] p-3 rounded-lg border border-[#333] flex flex-col justify-between">
                <div className="flex justify-between">
                   <span className="text-xs text-text-secondary">Water Filtration</span>
                   <CheckCircle2 className="w-3 h-3 text-success" />
                </div>
                <div className="mt-2">
                  <div className="text-sm font-bold text-white">Normal</div>
                  <div className="text-[10px] text-text-secondary">Filter Life: 78% remaining</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Card>
  );
};