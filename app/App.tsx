import React, { useState } from 'react';
import { Sidebar } from '../widgets/sidebar';
import { DashboardPage } from '../pages/dashboard';
import { BranchesPage } from '../pages/branches';
import { MachinesPage } from '../pages/machines';
import { TransactionsPage } from '../pages/transactions';
import { PromotionsPage } from '../pages/promotions';
import { WipPage } from '../pages/wip';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary selection:text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-[length:24px_24px] pointer-events-none opacity-20"></div>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pl-[240px] transition-all duration-300">
        <div className="p-8 max-w-[1600px] mx-auto">
          
          {/* Header */}
          <header className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Car Wash Dashboard</h1>
              <p className="text-text-secondary text-sm mt-1">IoT Platform & Franchise Management</p>
            </div>
            <div className="flex items-center space-x-3">
               <span className="text-xs text-gray-500 font-mono">UTC+07:00</span>
               <div className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_rgba(52,199,89,0.8)] animate-pulse"></div>
               <span className="text-xs font-medium text-success tracking-wider uppercase">System Online</span>
            </div>
          </header>

          {/* Content Based on Tab */}
          {activeTab === 'dashboard' ? (
            <DashboardPage />
          ) : activeTab === 'branches' ? (
            <BranchesPage />
          ) : activeTab === 'machines' ? (
            <MachinesPage />
          ) : activeTab === 'transactions' ? (
            <TransactionsPage />
          ) : activeTab === 'promotions' ? (
            <PromotionsPage />
          ) : (
            <WipPage moduleName={activeTab} />
          )}

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-[#222] text-center">
            <p className="text-xs text-[#444]">
              Car Wash IoT Platform v1.0.2 &copy; 2024 All Rights Reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;