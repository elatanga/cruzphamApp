import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { UserRole } from '../../types';

export const SignupForm: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.User);
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-6">
      <Input label="Real Name" placeholder="John Doe" />
      <Input label="TikTok Handle" placeholder="@creator" />
      
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Role</label>
        <select 
          className="w-full p-3 rounded-lg border border-slate-200"
          onChange={(e) => setRole(e.target.value as UserRole)}
        >
          <option value={UserRole.User}>Creator</option>
          <option value={UserRole.Manager}>Manager</option>
          <option value={UserRole.Admin}>Admin</option>
        </select>
      </div>

      {role === UserRole.User && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Recruiting Manager</label>
          <select className="w-full p-3 rounded-lg border border-slate-200">
            <option>Select a manager...</option>
          </select>
        </div>
      )}

      <Button isLoading={loading} className="w-full">Complete Signup</Button>
    </div>
  );
};