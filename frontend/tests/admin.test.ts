import { describe, it, expect } from 'vitest';
import { adminService } from '../services/adminService';
import { UserRole } from '../types';

describe('Admin Portal Security', () => {
  it('should prevent removal of MasterAdmin', async () => {
    await expect(adminService.removeUser(
      UserRole.Admin, 
      'master-admin-uid', 
      UserRole.MasterAdmin
    )).rejects.toThrow('Security Violation');
  });

  it('should allow Admin to remove a standard User', async () => {
    const result = await adminService.removeUser(
      UserRole.Admin, 
      'user-uid', 
      UserRole.User
    );
    expect(result).toBe(true);
  });
});
