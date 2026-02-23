import React from 'react';
import { Percent, Droplets, Gift, Plus } from 'lucide-react';

export const PromotionTemplates: React.FC = () => {
  const templates = [
    { icon: Percent, label: '% Discount' },
    { icon: Droplets, label: 'Free Wash' },
    { icon: Gift, label: 'Loyalty Program' },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Quick Create Templates</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {templates.map((t, idx) => (
          <button 
            key={idx}
            className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-dashed border-[#333] hover:border-primary/50 hover:bg-[#222] transition-all group"
          >
            <div className="p-2 bg-[#2a2a2a] rounded-lg group-hover:bg-primary/20 transition-colors">
              <t.icon className="w-5 h-5 text-gray-400 group-hover:text-primary" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white">{t.label}</span>
            <Plus className="w-4 h-4 text-gray-500 ml-auto group-hover:text-primary" />
          </button>
        ))}
      </div>
    </div>
  );
};