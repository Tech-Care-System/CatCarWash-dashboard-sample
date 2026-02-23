import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../shared/ui';
import { Server, Wifi, Signal, RotateCw, Save } from 'lucide-react';

export const ConnectivityStatusCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Server className="w-4 h-4 mr-2 text-primary" />
          Connectivity & IoT Status
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* WiFi */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-[#2A2A2A] flex items-center justify-center mr-3">
              <Wifi className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm text-white font-medium">WiFi Signal</p>
              <div className="flex space-x-0.5 mt-1">
                {[1,2,3,4,5].map(bar => (
                  <div key={bar} className={`w-1 h-2 rounded-sm ${bar <= 4 ? 'bg-success' : 'bg-[#333]'}`}></div>
                ))}
              </div>
            </div>
          </div>
          <span className="text-xs text-success">Connected</span>
        </div>

        {/* GSM */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-[#2A2A2A] flex items-center justify-center mr-3">
              <Signal className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm text-white font-medium">GSM / 4G</p>
              <div className="flex space-x-0.5 mt-1">
                {[1,2,3,4,5].map(bar => (
                  <div key={bar} className={`w-1 h-2 rounded-sm ${bar <= 3 ? 'bg-warning' : 'bg-[#333]'}`}></div>
                ))}
              </div>
            </div>
          </div>
          <span className="text-xs text-gray-400">Backup ready</span>
        </div>

        {/* Cloud Sync */}
        <div className="flex items-center justify-between bg-[#2A2A2A] p-3 rounded-lg border border-[#333]">
           <div className="flex items-center">
             <RotateCw className="w-4 h-4 text-success animate-spin-slow mr-3" />
             <div className="flex flex-col">
               <span className="text-sm text-white">Cloud Sync</span>
               <span className="text-xs text-text-secondary">Latency: 45ms</span>
             </div>
           </div>
           <div className="text-right">
              <span className="block text-xs text-success font-medium">Real-time</span>
              <span className="text-[10px] text-gray-500">2s ago</span>
           </div>
        </div>

        {/* Firmware */}
        <div className="flex items-center justify-between pt-2 border-t border-[#333]">
           <div className="flex items-center text-sm text-gray-400">
             <Save className="w-4 h-4 mr-2" />
             Firmware v2.4.1
           </div>
           <span className="text-[10px] bg-green-900/30 text-success px-2 py-0.5 rounded border border-green-900/50">Up to date</span>
        </div>

      </CardContent>
    </Card>
  );
};