import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../shared/ui';
import { Zap, Battery, ShieldCheck, CloudLightning, Thermometer } from 'lucide-react';

export const ElectricalStatusCard: React.FC = () => {
  const items = [
    { label: 'Power Supply', status: 'Stable', icon: Zap, color: 'text-success', badge: 'bg-success/10 text-success border-success/20' },
    { label: 'UPS / Battery', status: '98% Charged', icon: Battery, color: 'text-success', badge: 'bg-success/10 text-success border-success/20' },
    { label: 'Surge Protection', status: 'Active', icon: ShieldCheck, color: 'text-success', badge: 'bg-success/10 text-success border-success/20' },
    { label: 'Lightning Protection', status: 'Active', icon: CloudLightning, color: 'text-success', badge: 'bg-success/10 text-success border-success/20' },
    { label: 'Machine Temp', status: '42°C', icon: Thermometer, color: 'text-warning', badge: 'bg-warning/10 text-warning border-warning/20' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="w-4 h-4 mr-2 text-primary" />
          Electrical & Safety Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-2 rounded hover:bg-[#2A2A2A] transition-colors border border-transparent hover:border-[#333]">
            <div className="flex items-center text-sm text-gray-300">
              <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
              {item.label}
            </div>
            <span className={`text-xs px-2 py-0.5 rounded border font-medium ${item.badge}`}>
              {item.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};