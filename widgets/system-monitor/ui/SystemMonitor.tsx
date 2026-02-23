import React from 'react';
import { ElectricalStatusCard } from './ElectricalStatusCard';
import { PaymentBreakdownCard } from './PaymentBreakdownCard';
import { ConnectivityStatusCard } from './ConnectivityStatusCard';

export const SystemMonitor: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ElectricalStatusCard />
      <PaymentBreakdownCard />
      <ConnectivityStatusCard />
    </div>
  );
};