import React from 'react';
import { Separator } from '../ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-white" role="contentinfo">
      <Separator />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center">
              <span className="text-white text-[8px] font-bold font-mono">CX</span>
            </div>
            <span className="text-sm font-bold text-slate-900 tracking-tight">
              Compass X <span className="font-normal text-slate-500">AI Studio</span>
            </span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Enterprise Architecture Documentation
          </span>
        </div>
      </div>
    </footer>
  );
};
