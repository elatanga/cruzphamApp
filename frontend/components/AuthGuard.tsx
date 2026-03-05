import React, { useEffect, useState } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Logic to verify session via API route
    setIsAuthenticated(true); 
  }, []);

  if (isAuthenticated === null) return <div className="p-8">Loading secure session...</div>;
  if (!isAuthenticated) return <div className="p-8 text-red-600">Unauthorized access.</div>;

  return <>{children}</>;
};
