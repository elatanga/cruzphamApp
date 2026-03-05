import { describe, it, expect } from 'vitest';
import { managerService } from '../services/managerService';
import { UserRole } from '../types';

describe('Manager Service', () => {
  it('should reject unauthorized profile updates', async () => {
    await expect(managerService.updateManagerProfile(
      UserRole.User, 
      'm1', 
      { bio: 'New bio' }
    )).rejects.toThrow('Forbidden');
  });

  it('should allow MasterAdmin to update profiles', async () => {
    const result = await managerService.updateManagerProfile(
      UserRole.MasterAdmin, 
      'm1', 
      { bio: 'New bio' }
    );
    expect(result).toBe(true);
  });
});
