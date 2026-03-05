import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => (
  <div className="w-full space-y-1.5">
    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</label>
    <input 
      className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-slate-900 outline-none transition-all`}
      {...props}
    />
    {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
  </div>
);