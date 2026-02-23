import React from 'react';
import { Card } from '../../../shared/ui';
import { FluidGauge } from '../../../entities/machine';
import { Droplets, Sparkles, Disc, Container, Zap } from 'lucide-react';

export const MachineGauges: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
      <Card className="flex justify-center py-6 bg-[#222] border-primary/10">
        <FluidGauge 
          label="Foam Level" 
          value={72} 
          color="#FF6B00" 
          icon={Droplets} 
          subLabel="Refill at 20%"
        />
      </Card>
      <Card className="flex justify-center py-6 bg-[#222] border-primary/10">
        <FluidGauge 
          label="Wax Coating" 
          value={45} 
          color="#FFD60A" 
          icon={Sparkles} 
          subLabel="Refill at 20%"
        />
      </Card>
      <Card className="flex justify-center py-6 bg-[#222] border-primary/10">
        <FluidGauge 
          label="Tire Black" 
          value={58} 
          color="#FF6B00" 
          icon={Disc} 
          subLabel="Refill at 15%"
        />
      </Card>
      <Card className="flex justify-center py-6 bg-[#222] border-primary/10">
        <FluidGauge 
          label="Water Supply" 
          value={89} 
          color="#3b82f6" 
          icon={Droplets} 
          subLabel="Connected to main line"
        />
      </Card>
      <Card className="flex justify-center py-6 bg-[#222] border-danger/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-danger/5 pointer-events-none"></div>
        <FluidGauge 
          label="Gas Cylinder" 
          value={28} 
          color="#FF3B30" 
          icon={Container} 
          threshold={30}
          subLabel="⚠ REFILL NEEDED"
        />
      </Card>
    </div>
  );
};