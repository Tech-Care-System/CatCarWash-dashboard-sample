import React from 'react';

interface WipPageProps {
  moduleName: string;
}

export const WipPage: React.FC<WipPageProps> = ({ moduleName }) => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center text-text-secondary border-2 border-dashed border-[#333] rounded-xl bg-[#1A1A1A]/50">
       <div className="p-4 rounded-full bg-[#222] mb-4">
         <span className="text-2xl">🚧</span>
       </div>
       <h2 className="text-xl font-medium text-white mb-2">Work in Progress</h2>
       <p>The {moduleName} module is currently under development.</p>
    </div>
  );
};