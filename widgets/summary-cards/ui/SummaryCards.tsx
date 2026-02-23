import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardAction 
} from '../../../shared/ui';
import { MapPin, Coins, Droplets, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const coinData = [
  { day: 'M', value: 4000 },
  { day: 'T', value: 3000 },
  { day: 'W', value: 5000 },
  { day: 'T', value: 2780 },
  { day: 'F', value: 6890 },
  { day: 'S', value: 8390 },
  { day: 'S', value: 7490 },
];

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  iconClass?: string;
  iconBgClass?: string;
  children?: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  iconClass = "text-primary", 
  iconBgClass = "bg-primary/10 border-primary/20",
  children, 
  className
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl font-bold text-white">{value}</CardTitle>
        <CardAction>
          <div className={`p-2 rounded-lg border ${iconBgClass}`}>
            <Icon className={`w-5 h-5 ${iconClass}`} />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export const SummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      
      <StatCard 
        title="Total Branches" 
        value="24" 
        icon={MapPin}
      >
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center text-gray-400">
            <span className="w-2 h-2 rounded-full bg-success mr-1.5 shadow-[0_0_5px_rgba(52,199,89,0.5)]"></span>
            18 Online
          </div>
          <div className="flex items-center text-gray-400">
            <span className="w-2 h-2 rounded-full bg-gray-600 mr-1.5"></span>
            4 Offline
          </div>
          <div className="flex items-center text-gray-400">
            <span className="w-2 h-2 rounded-full bg-danger mr-1.5 shadow-[0_0_5px_rgba(255,59,48,0.5)]"></span>
            2 Alert
          </div>
        </div>
        <div className="mt-3 text-xs text-success flex items-center">
          <TrendingUp className="w-3 h-3 mr-1" />
          <span>+2 vs last month</span>
        </div>
      </StatCard>

      <StatCard 
        title="Coin Collection" 
        value="฿ 127,450" 
        icon={Coins}
      >
        <div className="h-10 w-full mb-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={coinData}>
              <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                {coinData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 6 ? '#FF6B00' : '#444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-text-secondary">Total coins in all machines today</p>
      </StatCard>

      <StatCard 
        title="Today's Wash Sessions" 
        value="342" 
        icon={Droplets}
      >
        <div className="flex items-center mb-3">
          <span className="bg-success/10 text-success text-xs px-2 py-0.5 rounded border border-success/20 flex items-center">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            +12%
          </span>
          <span className="text-text-secondary text-xs ml-2">vs yesterday</span>
        </div>
        <p className="text-xs text-text-secondary">Active sessions across all branches</p>
      </StatCard>

      {/* Alerts & Maintenance */}
      <Card className="border-danger/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-danger/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
        
        <CardHeader className="relative z-10">
          <CardDescription>Alerts & Maintenance</CardDescription>
          <CardTitle className="text-3xl font-bold text-white">5</CardTitle>
          <CardAction>
            <div className="p-2 bg-danger/10 rounded-lg border border-danger/20 animate-pulse">
              <AlertTriangle className="w-5 h-5 text-danger" />
            </div>
          </CardAction>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-2">
           <div className="flex items-center justify-between text-xs bg-[#1A1A1A] p-1.5 rounded border border-danger/20">
             <span className="text-danger font-medium flex items-center">
               <span className="w-1.5 h-1.5 rounded-full bg-danger mr-2"></span>
               Critical
             </span>
             <span className="text-white font-mono">2</span>
           </div>
           <div className="flex items-center justify-between text-xs bg-[#1A1A1A] p-1.5 rounded border border-warning/20">
             <span className="text-warning font-medium flex items-center">
               <span className="w-1.5 h-1.5 rounded-full bg-warning mr-2"></span>
               Warning
             </span>
             <span className="text-white font-mono">3</span>
           </div>
        </CardContent>
      </Card>

    </div>
  );
};