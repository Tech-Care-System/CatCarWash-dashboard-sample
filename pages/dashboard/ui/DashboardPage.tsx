import React from 'react';
import { SummaryCards } from '../../../widgets/summary-cards';
import { MachineTelemetry } from '../../../widgets/machine-telemetry';
import { SystemMonitor } from '../../../widgets/system-monitor';

export const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SummaryCards />
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-white pl-1 border-l-4 border-primary">Machine Telemetry</h2>
        <MachineTelemetry />
        <SystemMonitor />
      </div>
    </div>
  );
};