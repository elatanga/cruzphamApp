import React from 'react';
import { Skeleton } from '../ui/Skeleton';

export const AnalyticsDashboard: React.FC<{ handle: string }> = ({ handle }) => (
  <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
    <h2 className="text-xl font-bold mb-6">Analytics for {handle}</h2>
    <div className="grid grid-cols-3 gap-6">
      <div className="p-4 bg-slate-50 rounded-lg">
        <p className="text-xs text-slate-500 uppercase">Followers</p>
        <Skeleton className="h-8 w-20 mt-2" />
      </div>
      <div className="p-4 bg-slate-50 rounded-lg">
        <p className="text-xs text-slate-500 uppercase">Engagement</p>
        <Skeleton className="h-8 w-20 mt-2" />
      </div>
      <div className="p-4 bg-slate-50 rounded-lg">
        <p className="text-xs text-slate-500 uppercase">Likes</p>
        <Skeleton className="h-8 w-20 mt-2" />
      </div>
    </div>
  </div>
);