import React from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
}

export const Notification: React.FC<NotificationProps> = ({ message, type }) => (
  <div className={`fixed top-6 right-6 p-4 rounded-xl shadow-2xl border ${type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'} animate-in fade-in slide-in-from-top-4`}>
    <p className="font-medium">{message}</p>
  </div>
);