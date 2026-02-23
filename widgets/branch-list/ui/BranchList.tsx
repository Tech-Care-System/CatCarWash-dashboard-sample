import React, { useState } from 'react';
import { Card } from '../../../shared/ui';
import { List, Map as MapIcon, Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface BranchData {
  id: number;
  name: string;
  location: string;
  status: 'Online' | 'Offline' | 'Warning';
  machinesActive: number;
  machinesTotal: number;
  revenue: number;
  coinLevel: number;
  lastSync: string;
}

const mockBranches: BranchData[] = [
  { id: 1, name: 'สาขาพุทธมณฑล สาย 4', location: 'นครปฐม', status: 'Online', machinesActive: 3, machinesTotal: 3, revenue: 4520, coinLevel: 78, lastSync: '2s ago' },
  { id: 2, name: 'สาขาศาลายา', location: 'นครปฐม', status: 'Online', machinesActive: 2, machinesTotal: 2, revenue: 3180, coinLevel: 65, lastSync: '5s ago' },
  { id: 3, name: 'สาขาบางแค', location: 'กรุงเทพฯ', status: 'Warning', machinesActive: 2, machinesTotal: 3, revenue: 2890, coinLevel: 42, lastSync: '1m ago' },
  { id: 4, name: 'สาขาพระราม 2', location: 'กรุงเทพฯ', status: 'Offline', machinesActive: 0, machinesTotal: 2, revenue: 0, coinLevel: 91, lastSync: '3h ago' },
  { id: 5, name: 'สาขามหาชัย', location: 'สมุทรสาคร', status: 'Online', machinesActive: 4, machinesTotal: 4, revenue: 5210, coinLevel: 55, lastSync: '3s ago' },
];

export const BranchList: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Online': return 'text-success bg-success/10 border-success/20';
      case 'Warning': return 'text-warning bg-warning/10 border-warning/20';
      case 'Offline': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getStatusDot = (status: string) => {
    switch(status) {
      case 'Online': return 'bg-success';
      case 'Warning': return 'bg-warning';
      case 'Offline': return 'bg-danger';
      default: return 'bg-gray-400';
    }
  };

  return (
    <Card noPadding className="border-white/5 bg-[#222] overflow-hidden">
      {/* Controls Header */}
      <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Search & Filter */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative group w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search branches..." 
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-600"
            />
          </div>
          <button className="p-2 bg-[#1A1A1A] border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all text-gray-400 hover:text-white">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* View Toggle */}
        <div className="flex bg-[#1A1A1A] p-1 rounded-lg border border-white/10">
          <button 
            onClick={() => setViewMode('list')}
            className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'list' ? 'bg-[#333] text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <List className="w-4 h-4 mr-2" />
            List
          </button>
          <button 
            onClick={() => setViewMode('map')}
            className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'map' ? 'bg-[#333] text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <MapIcon className="w-4 h-4 mr-2" />
            Map
          </button>
        </div>
      </div>

      {/* Content Area */}
      {viewMode === 'list' ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-[#1e1e1e] text-xs uppercase text-gray-500 font-semibold tracking-wider">
                <th className="px-6 py-4 cursor-pointer hover:text-white group">
                  <div className="flex items-center">Branch Name <ArrowUpDown className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-50" /></div>
                </th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Machines</th>
                <th className="px-6 py-4 text-right">Today Revenue</th>
                <th className="px-6 py-4">Coin Level</th>
                <th className="px-6 py-4 text-right">Last Sync</th>
                <th className="px-6 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/5">
              {mockBranches.map((branch) => (
                <tr key={branch.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-medium text-white group-hover:text-primary transition-colors">
                    {branch.name}
                  </td>
                  <td className="px-6 py-4 text-text-secondary">{branch.location}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(branch.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${getStatusDot(branch.status)}`}></span>
                      {branch.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    <span className="text-white">{branch.machinesActive}</span>/{branch.machinesTotal} Active
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-white">
                    ฿ {branch.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-[#333] rounded-full overflow-hidden w-24">
                        <div 
                          className={`h-full rounded-full ${branch.coinLevel > 80 ? 'bg-warning' : 'bg-primary'}`} 
                          style={{ width: `${branch.coinLevel}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 w-8">{branch.coinLevel}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-500 font-mono">
                    {branch.lastSync}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-500 hover:text-white p-1 rounded-md hover:bg-[#333]">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
            <span>Showing 1-5 of 24 branches</span>
            <div className="flex gap-2">
              <button className="p-1 rounded bg-[#1A1A1A] border border-white/10 hover:border-white/30 hover:text-white disabled:opacity-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 rounded bg-[#1A1A1A] border border-white/10 hover:border-white/30 hover:text-white">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Placeholder Map View */
        <div className="relative h-[600px] w-full bg-[#151515] overflow-hidden">
          {/* Stylized Map Background Pattern */}
          <div className="absolute inset-0 opacity-20">
             <svg width="100%" height="100%">
                <defs>
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>
          
          {/* Fake Landmass - Abstract Representation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-10">
             <svg viewBox="0 0 200 200" className="w-full h-full fill-[#333]">
                <path d="M40,100 Q60,50 100,60 T160,100 T120,160 T60,140 Z" />
             </svg>
          </div>

          {/* Branch Pins */}
          {mockBranches.map((branch, index) => {
             // Random positions for demo purposes (usually would be lat/lng)
             const top = 30 + (index * 12); 
             const left = 40 + (index * 10) + (index % 2 * -5);
             
             let pinColor = 'bg-gray-500 shadow-[0_0_10px_rgba(107,114,128,0.5)]';
             if (branch.status === 'Online') pinColor = 'bg-success shadow-[0_0_15px_rgba(52,199,89,0.6)]';
             if (branch.status === 'Warning') pinColor = 'bg-warning shadow-[0_0_15px_rgba(255,214,10,0.6)]';
             if (branch.status === 'Offline') pinColor = 'bg-danger shadow-[0_0_15px_rgba(255,59,48,0.6)]';

             return (
               <div 
                  key={branch.id} 
                  className="absolute group cursor-pointer"
                  style={{ top: `${top}%`, left: `${left}%` }}
               >
                 <div className={`w-4 h-4 rounded-full border-2 border-white ${pinColor} transform transition-all group-hover:scale-125`}></div>
                 {/* Tooltip */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#222] border border-white/10 p-3 rounded-lg shadow-xl w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <p className="font-bold text-white text-sm mb-1">{branch.name}</p>
                    <div className="flex justify-between items-center text-xs">
                       <span className={branch.status === 'Online' ? 'text-success' : branch.status === 'Warning' ? 'text-warning' : 'text-danger'}>{branch.status}</span>
                       <span className="text-gray-400">฿ {branch.revenue.toLocaleString()}</span>
                    </div>
                 </div>
               </div>
             )
          })}
          
          <div className="absolute bottom-4 right-4 bg-[#222] p-2 rounded border border-white/10 text-xs text-gray-500">
             Interactive Map Placeholder
          </div>
        </div>
      )}
    </Card>
  );
};