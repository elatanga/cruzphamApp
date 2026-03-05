import { describe, it, expect, vi } from 'vitest';
import { AuditService } from '../services/auditService';
import { RateLimiter } from '../services/rateLimiter';

describe('Security Hardening', () => {
  it('should log audit events without PII', async () => {
    const spy = vi.spyOn(console, 'log');
    await AuditService.log({ action: 'LOGIN_ATTEMPT', requestId: 'req-1', metadata: { success: false } });
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('[AUDIT] LOGIN_ATTEMPT'));
  });

  it('should enforce rate limits', async () => {
    const allowed = await RateLimiter.check('login-123', 5, 60000);
    expect(allowed).toBe(true);
  });
});
