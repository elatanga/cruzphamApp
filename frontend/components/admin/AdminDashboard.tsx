import React from 'react';
import { UserRole } from '../../types';
import { authorize, Permission } from '../../services/rbac';

interface AdminDashboardProps {
  role: UserRole;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ role }) => {
  const canManageUsers = () => {
    try {
      authorize(role, Permission.MANAGE_USERS);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Agency Control Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {canManageUsers() && (
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h2 className="font-bold mb-2">User Management</h2>
            <p className="text-sm text-slate-500">Manage creators, managers, and admins.</p>
          </div>
        )}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <h2 className="font-bold mb-2">Audit Logs</h2>
          <p className="text-sm text-slate-500">View system activity timeline.</p>
        </div>
      </div>
    </div>
  );
};