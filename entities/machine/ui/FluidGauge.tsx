import React from 'react';

interface FluidGaugeProps {
  label: string;
  value: number; // 0-100
  color: string;
  icon: React.ElementType;
  threshold?: number;
  subLabel?: string;
}

export const FluidGauge: React.FC<FluidGaugeProps> = ({ 
  label, 
  value, 
  color, 
  icon: Icon, 
  threshold = 20,
  subLabel
}) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const arcLength = 220;
  const strokeDasharray = `${(circumference * arcLength) / 360} ${circumference}`;
  const strokeDashoffset = (circumference * arcLength) / 360 - ((value / 100) * (circumference * arcLength) / 360);
  
  const isLow = value <= threshold;
  const displayColor = isLow ? '#FF3B30' : color;
  const displayClass = isLow ? 'animate-pulse text-danger' : '';

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg
          height={radius * 2 + stroke + 10}
          width={radius * 2 + stroke + 10}
          className="transform rotate-[160deg]" 
        >
          <circle
            stroke="#333"
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx="50%"
            cy="50%"
            strokeLinecap="round"
            style={{ strokeDasharray }}
          />
          <circle
            stroke={displayColor}
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx="50%"
            cy="50%"
            strokeLinecap="round"
            style={{ 
              strokeDasharray, 
              strokeDashoffset,
              transition: 'stroke-dashoffset 1s ease-out' 
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-0 pt-2">
           <Icon className={`w-6 h-6 mb-1 ${isLow ? 'text-danger' : 'text-text-secondary'}`} />
           <span className={`text-xl font-bold font-mono ${displayClass ? 'text-danger' : 'text-white'}`}>
             {value}%
           </span>
        </div>
      </div>
      <div className="text-center mt-[-10px]">
        <p className="text-sm font-medium text-white">{label}</p>
        <p className={`text-[10px] mt-1 ${isLow ? 'text-danger font-semibold' : 'text-text-secondary'}`}>
          {subLabel || `Threshold: ${threshold}%`}
        </p>
      </div>
    </div>
  );
};