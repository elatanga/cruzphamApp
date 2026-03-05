import React from 'react';
import { Skeleton } from '../ui/Skeleton';

export const GrowthDashboard: React.FC = () => (
  <div className="p-8 bg-slate-50 min-h-screen">
    <h1 className="text-3xl font-bold mb-8">Agency Growth</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <p className="text-xs font-bold uppercase text-slate-500 mb-2">Total Creators</p>
        <p className="text-4xl font-bold">150</p>
      </div>
      <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <p className="text-xs font-bold uppercase text-slate-500 mb-2">Active</p>
        <p className="text-4xl font-bold">120</p>
      </div>
      <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <p className="text-xs font-bold uppercase text-slate-500 mb-2">New This Month</p>
        <p className="text-4xl font-bold">12</p>
      </div>
    </div>
  </div>
);