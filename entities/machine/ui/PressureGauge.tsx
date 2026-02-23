import React from 'react';

interface PressureGaugeProps {
  label: string;
  value: number;
  max: number;
  minNormal: number;
  maxNormal: number;
  unit: string;
}

export const PressureGauge: React.FC<PressureGaugeProps> = ({
  label,
  value,
  max,
  minNormal,
  maxNormal,
  unit
}) => {
  const startAngle = -135;
  const endAngle = 135;
  const totalAngle = endAngle - startAngle;
  
  const percentage = Math.min(Math.max(value / max, 0), 1);
  const currentAngle = startAngle + (percentage * totalAngle);

  const isWarning = value < minNormal || value > maxNormal;

  const ticks = [];
  const numTicks = 10;
  for (let i = 0; i <= numTicks; i++) {
    const tickAngle = startAngle + (i / numTicks) * totalAngle;
    const isMajor = i % 5 === 0;
    ticks.push(
      <div
        key={i}
        className={`absolute w-[2px] ${isMajor ? 'h-3 bg-gray-400' : 'h-2 bg-gray-600'} origin-bottom`}
        style={{
          left: '50%',
          bottom: '50%',
          transform: `translateX(-50%) rotate(${tickAngle}deg) translateY(-38px)`,
        }}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36 rounded-full bg-[#1e1e1e] border-4 border-[#333] shadow-inner flex items-center justify-center">
        <div className="absolute inset-0 rounded-full">{ticks}</div>
        
        <div className="absolute top-8 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
          {unit}
        </div>

        <div 
          className="absolute w-1 h-14 bg-red-500 origin-bottom rounded-t-full z-10"
          style={{
            bottom: '50%',
            left: 'calc(50% - 2px)',
            transform: `rotate(${currentAngle}deg)`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 5px rgba(255,0,0,0.5)'
          }}
        >
          <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 bg-gray-200 rounded-full border-2 border-gray-600"></div>
        </div>

        <div className="absolute w-2 h-2 bg-black rounded-full z-20"></div>
      </div>

      <div className="text-center mt-3">
        <p className="text-sm font-medium text-white">{label}</p>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className={`text-2xl font-bold font-mono ${isWarning ? 'text-danger' : 'text-success'}`}>
            {value}
          </span>
          <span className="text-xs text-text-secondary self-end mb-1">{unit}</span>
        </div>
      </div>
    </div>
  );
};