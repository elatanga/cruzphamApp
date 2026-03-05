import React from 'react';
import { PublicLayout } from '../layout/PublicLayout';

interface Creator {
  id: string;
  tiktokName: string;
  tiktokHandle: string;
}

interface Manager {
  id: string;
  tiktokName: string;
  creators: Creator[];
}

const mockData: Manager[] = [
  {
    id: 'm1',
    tiktokName: 'Manager Alpha',
    creators: [{ id: 'c1', tiktokName: 'Creator One', tiktokHandle: '@c1' }]
  }
];

export const CreatorsPage: React.FC = () => (
  <PublicLayout>
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-12">Our Creator Network</h1>
      {mockData.map(manager => (
        <section key={manager.id} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-500 uppercase tracking-widest">Managed by {manager.tiktokName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {manager.creators.map(creator => (
              <div key={creator.id} className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-lg">{creator.tiktokName}</h3>
                <p className="text-slate-500">{creator.tiktokHandle}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </PublicLayout>
);