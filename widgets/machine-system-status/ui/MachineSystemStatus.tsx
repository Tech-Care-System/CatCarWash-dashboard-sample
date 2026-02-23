import React from 'react';
import { Zap, Battery, ShieldCheck, CloudLightning, CheckCircle2, AlertTriangle, Droplets, FlaskConical } from 'lucide-react';

interface StatusItemProps {
  label: string;
  status: string;
  icon: React.ElementType;
  isWarning?: boolean;
}

const StatusItem: React.FC<StatusItemProps> = ({ label, status, icon: Icon, isWarning }) => (
  <div className={`p-4 rounded-xl border ${isWarning ? 'bg-warning/5 border-warning/20' : 'bg-[#222] border-primary/10'} flex items-center justify-between transition-colors hover:bg-[#2A2A2A]`}>
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${isWarning ? 'bg-warning/10 text-warning' : 'bg-[#333] text-gray-300'}`}>
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-sm font-medium text-gray-200">{label}</span>
    </div>
    <div className="flex items-center">
      {isWarning ? (
        <AlertTriangle className="w-4 h-4 text-warning mr-2" />
      ) : (
        <CheckCircle2 className="w-4 h-4 text-success mr-2" />
      )}
      <span className={`text-xs font-bold ${isWarning ? 'text-warning' : 'text-success'}`}>
        {status}
      </span>
    </div>
  </div>
);

export const MachineSystemStatus: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <StatusItem label="Power Supply" status="Stable" icon={Zap} />
      <StatusItem label="UPS Battery" status="98%" icon={Battery} />
      <StatusItem label="Surge Protection" status="Active" icon={ShieldCheck} />
      <StatusItem label="Lightning Guard" status="Active" icon={CloudLightning} />
      <StatusItem label="Water Filtration" status="22% Life" icon={Droplets} isWarning />
      <StatusItem label="Foam Concentration" status="Optimal" icon={FlaskConical} />
    </div>
  );
};