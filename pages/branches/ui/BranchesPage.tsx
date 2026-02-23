import React from 'react';
import { BranchStats } from '../../../widgets/branch-stats';
import { BranchList } from '../../../widgets/branch-list';
import { Plus } from 'lucide-react';

export const BranchesPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Page Controls */}
      <div className="flex justify-between items-center mb-6">
        <div>
           <h2 className="text-2xl font-bold text-white tracking-tight">Branches Management</h2>
           <p className="text-text-secondary text-sm">Monitor and manage all franchise locations</p>
        </div>
        <button className="flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-lg shadow-primary/20 active:scale-95">
           <Plus className="w-4 h-4 mr-2" />
           Add Branch
        </button>
      </div>

      <BranchStats />
      
      <div className="mt-8">
        <BranchList />
      </div>
    </div>
  );
};