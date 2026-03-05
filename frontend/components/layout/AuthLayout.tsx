import React from 'react';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-10 border border-slate-100">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h1>
        <p className="text-slate-500 mt-2 text-sm">{subtitle}</p>
      </div>
      {children}
    </div>
  </div>
);