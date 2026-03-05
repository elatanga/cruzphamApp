import React from 'react';

export const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <nav className="p-6 flex justify-between items-center border-b border-slate-200">
      <div className="text-2xl font-bold tracking-tighter">CRUZPHAM</div>
      <div className="space-x-6 text-sm font-medium">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#showcase">Showcase</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    <main>{children}</main>
    <footer className="p-12 text-center border-t border-slate-200 text-slate-500 text-sm">
      <p>Created by EL CruzPham</p>
      <div className="mt-4 text-2xl">🥂</div>
    </footer>
  </div>
);