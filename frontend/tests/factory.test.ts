import { describe, it, expect, vi } from 'vitest';
import { ServiceFactory } from '../services/ServiceFactory';

describe('ServiceFactory Security', () => {
  it('should block mock services in production', () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('LOCAL_DEV', 'true');
    
    expect(() => ServiceFactory.getEmailService()).toThrow();
  });

  it('should allow mock services in development', () => {
    vi.stubEnv('NODE_ENV', 'development');
    vi.stubEnv('LOCAL_DEV', 'true');
    
    const service = ServiceFactory.getEmailService();
    expect(service).toBeDefined();
  });
});