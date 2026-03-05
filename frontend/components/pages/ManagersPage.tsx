import React from 'react';
import { PublicLayout } from '../layout/PublicLayout';

interface ManagerProfile {
  id: string;
  name: string;
  handle: string;
  bio: string;
  email: string;
  phone: string;
}

const mockManagers: ManagerProfile[] = [
  {
    id: 'm1',
    name: 'EL CruzPham',
    handle: '@elcruzpham',
    bio: 'Founder & Agency Owner. Visionary leader in the TikTok creator space.',
    email: 'el@cruzpham.com',
    phone: '+1-555-0101'
  }
];

export const ManagersPage: React.FC = () => (
  <PublicLayout>
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-12">Meet Our Leadership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockManagers.map(manager => (
          <div key={manager.id} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100">
            <div className="w-20 h-20 bg-slate-200 rounded-full mb-6"></div>
            <h2 className="text-2xl font-bold">{manager.name}</h2>
            <p className="text-slate-500 mb-4">{manager.handle}</p>
            <p className="text-slate-600 mb-6">{manager.bio}</p>
            <div className="text-sm space-y-1 text-slate-400">
              <p>{manager.email}</p>
              <p>{manager.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PublicLayout>
);