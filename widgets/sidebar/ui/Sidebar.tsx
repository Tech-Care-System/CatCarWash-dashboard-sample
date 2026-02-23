import React from 'react';
import { LayoutDashboard, MapPin, MonitorPlay, Receipt, Tag, Settings, Cat, User, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'branches', label: 'Branches (สาขา)', icon: MapPin },
    { id: 'machines', label: 'Machines', icon: MonitorPlay },
    { id: 'transactions', label: 'Transactions', icon: Receipt },
    { id: 'promotions', label: 'Promotions', icon: Tag },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-[240px] h-screen bg-[#222222] flex flex-col border-r border-[#333] fixed left-0 top-0 z-50">
      <div className="h-20 flex items-center px-6 border-b border-[#333]">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
          <Cat className="text-white w-5 h-5" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">CAT<span className="text-primary">CARWASH</span></span>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive 
                  ? 'bg-primary/10 text-primary border border-primary/20' 
                  : 'text-text-secondary hover:bg-[#2A2A2A] hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-primary' : 'text-gray-500 group-hover:text-white'}`} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#333]">
        <div className="flex items-center p-2 rounded-lg hover:bg-[#2A2A2A] cursor-pointer transition-colors">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center border border-gray-600">
            <User className="w-5 h-5 text-gray-300" />
          </div>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-white truncate">Admin User</p>
            <p className="text-xs text-text-secondary truncate">Manager</p>
          </div>
          <LogOut className="w-4 h-4 text-text-secondary ml-auto hover:text-danger" />
        </div>
      </div>
    </div>
  );
};