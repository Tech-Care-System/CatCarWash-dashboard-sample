import React from 'react';
import { PromotionStats } from '../../../widgets/promotion-stats';
import { PromotionList } from '../../../widgets/promotion-list';
import { PromotionTemplates } from '../../../widgets/promotion-templates';
import { Plus } from 'lucide-react';

export const PromotionsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
           <h2 className="text-2xl font-bold text-white tracking-tight">Promotions</h2>
           <p className="text-text-secondary text-sm">Manage campaigns and discount programs</p>
        </div>
        <button className="flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-lg shadow-primary/20 active:scale-95">
           <Plus className="w-4 h-4 mr-2" />
           Create Promotion
        </button>
      </div>

      <PromotionStats />
      <PromotionList />
      <PromotionTemplates />
    </div>
  );
};