import React from 'react';
import { PublicLayout } from '../layout/PublicLayout';
import { Button } from '../ui/Button';

export const HomePage: React.FC = () => (
  <PublicLayout>
    <section className="py-24 px-6 text-center">
      <h1 className="text-6xl font-bold mb-6">Elite TikTok Creator Network</h1>
      <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        Empowering the next generation of digital storytellers through strategic management and luxury brand partnerships.
      </p>
      <div className="flex gap-4 justify-center">
        <Button>Join the Agency</Button>
        <Button variant="outline">Meet Our Creators</Button>
      </div>
    </section>
  </PublicLayout>
);