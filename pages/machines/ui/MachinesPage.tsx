import React, { useState } from 'react';
import { MachineOverview } from '../../../widgets/machine-overview';
import { MachineGauges } from '../../../widgets/machine-gauges';
import { MachinePressure } from '../../../widgets/machine-pressure';
import { MachineSystemStatus } from '../../../widgets/machine-system-status';
import { MachineConnectivity } from '../../../widgets/machine-connectivity';
import { ChevronDown } from 'lucide-react';

export const MachinesPage: React.FC = () => {
  const [activeMachine, setActiveMachine] = useState('01');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
        <div>
           <h2 className="text-2xl font-bold text-white tracking-tight">Machine Monitoring</h2>
           <p className="text-text-secondary text-sm">Real-time IoT telemetry and sensor data</p>
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center bg-[#222] border border-[#333] text-white px-3 py-1.5 rounded-lg text-sm hover:border-primary/50 transition-colors">
              สาขาพุทธมณฑล สาย 4
              <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
           </button>
           <div className="flex items-center text-xs font-mono text-success bg-success/10 px-3 py-1.5 rounded-lg border border-success/20">
              Live
              <span className="w-2 h-2 rounded-full bg-success ml-2 animate-pulse shadow-[0_0_8px_rgba(52,199,89,0.6)]"></span>
           </div>
        </div>
      </div>

      {/* Machine Selector Tabs */}
      <div className="flex items-center gap-6 border-b border-[#333] mb-6 overflow-x-auto">
        {[
          { id: '01', status: 'Active', color: 'bg-success' },
          { id: '02', status: 'Active', color: 'bg-success' },
          { id: '03', status: 'Idle', color: 'bg-warning' }
        ].map((machine) => (
          <button
            key={machine.id}
            onClick={() => setActiveMachine(machine.id)}
            className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${
              activeMachine === machine.id 
                ? 'text-primary' 
                : 'text-gray-500 hover:text-white'
            }`}
          >
            Machine {machine.id}
            <span className={`inline-block w-2 h-2 rounded-full ml-2 ${machine.color}`}></span>
            {activeMachine === machine.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <MachineOverview />
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3 pl-1">Consumables & Fluids</h3>
        <MachineGauges />
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3 pl-1">Pressure & Vacuum</h3>
        <MachinePressure />
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3 pl-1">System Health</h3>
        <MachineSystemStatus />
        <MachineConnectivity />
      </div>
    </div>
  );
};