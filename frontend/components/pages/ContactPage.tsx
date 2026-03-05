import React, { useState } from 'react';
import { PublicLayout } from '../layout/PublicLayout';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const ContactPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Logic: Call EmailService via API route
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <PublicLayout>
      <div className="max-w-2xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-8">Contact the Team</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Name" placeholder="Your name" />
          <Input label="Email" placeholder="name@example.com" />
          <Button isLoading={loading}>Send Message</Button>
        </form>
      </div>
    </PublicLayout>
  );
};