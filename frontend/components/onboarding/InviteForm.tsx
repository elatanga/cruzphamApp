import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const InviteForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInvite = async () => {
    setLoading(true);
    // Call onboardingService.createInvite
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
      <h2 className="text-lg font-bold mb-6">Invite New Creator</h2>
      <div className="space-y-4">
        <Input 
          label="Creator Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="creator@tiktok.com"
        />
        <Button onClick={handleInvite} isLoading={loading}>Send Invitation</Button>
      </div>
    </div>
  );
};
