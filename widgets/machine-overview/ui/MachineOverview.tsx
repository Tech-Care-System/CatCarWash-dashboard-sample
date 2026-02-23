import React from 'react';
import { Card } from '../../../shared/ui';
import { Car, Clock, Activity, Thermometer, Wifi, Cpu } from 'lucide-react';

export const MachineOverview: React.FC = () => {
  return (
    <Card className="mb-6 bg-[#222] border-primary/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2">
        {/* Left: Identity */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-gray-600 shadow-inner">
            <Car className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Luxury Model</h3>
            <p className="text-sm text-text-secondary font-mono">SN: CCW-LX-0042</p>
          </div>
        </div>

        {/* Center: Metrics */}
        <div className="flex items-center justify-center gap-8 w-full md:w-auto border-y md:border-y-0 md:border-x border-[#333] py-4 md:py-0 md:px-12">
          <div className="text-center">
            <p className="text-xs text-text-secondary uppercase tracking-wider">Uptime</p>
            <p className="text-xl font-bold text-success">99.2%</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-text-secondary uppercase tracking-wider">Sessions</p>
            <p className="text-xl font-bold text-white">48</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-text-secondary uppercase tracking-wider">Mode</p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 mt-1">
              Idle
            </span>
          </div>
        </div>

        {/* Right: Technical */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <div className="flex items-center justify-between md:justify-end gap-3 text-sm">
            <span className="text-text-secondary">Temperature</span>
            <div className="flex items-center text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">
              <Thermometer className="w-3 h-3 mr-1" />
              38°C
            </div>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-3 text-sm">
            <span className="text-text-secondary">Connectivity</span>
            <div className="flex items-center text-white">
              <Wifi className="w-3 h-3 mr-1 text-success" />
              Connected
            </div>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-3 text-sm">
            <span className="text-text-secondary">Firmware</span>
            <div className="flex items-center text-gray-400">
              <Cpu className="w-3 h-3 mr-1" />
              v2.4.1
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};