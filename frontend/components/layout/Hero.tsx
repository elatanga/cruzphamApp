import React from 'react';

export const Hero: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
    <div className="absolute top-10 right-10 text-6xl opacity-20">🥂</div>
    <div className="relative z-10 text-center px-6">
      <h1 className="text-7xl font-bold tracking-tighter mb-6">{title}</h1>
      <p className="text-xl text-slate-600 max-w-xl mx-auto">{subtitle}</p>
    </div>
  </div>
);