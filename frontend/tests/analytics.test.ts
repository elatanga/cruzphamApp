import { describe, it, expect, vi } from 'vitest';
import { AnalyticsFactory } from '../services/AnalyticsFactory';

describe('Analytics System', () => {
  it('should block mock provider in production', () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('LOCAL_DEV', 'true');
    const provider = AnalyticsFactory.getProvider();
    expect(provider.constructor.name).not.toBe('MockAnalyticsProvider');
  });

  it('should return mock provider in development', () => {
    vi.stubEnv('NODE_ENV', 'development');
    vi.stubEnv('LOCAL_DEV', 'true');
    const provider = AnalyticsFactory.getProvider();
    expect(provider.constructor.name).toBe('MockAnalyticsProvider');
  });
});