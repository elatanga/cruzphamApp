import { describe, it, expect } from 'vitest';
import { onboardingService } from '../services/onboardingService';
import { UserRole } from '../types';

describe('Onboarding Flow', () => {
  it('should allow Admin to create invite', async () => {
    const token = await onboardingService.createInvite(UserRole.Admin, 'test@test.com');
    expect(token).toBeDefined();
  });

  it('should deny User from creating invite', async () => {
    await expect(onboardingService.createInvite(UserRole.User, 'test@test.com'))
      .rejects.toThrow('Forbidden');
  });

  it('should reject expired tokens', async () => {
    await expect(onboardingService.claimInvite('expired', {}))
      .rejects.toThrow('Invite expired');
  });
});
