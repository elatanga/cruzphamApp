import { describe, it, expect } from 'vitest';
import { can, Permission } from '../services/rbac';
import { UserRole } from '../types';

describe('RBAC Engine', () => {
  it('MasterAdmin should have all permissions', () => {
    expect(can(UserRole.MasterAdmin, Permission.SYSTEM_CONFIG)).toBe(true);
    expect(can(UserRole.MasterAdmin, Permission.MANAGE_USERS)).toBe(true);
  });

  it('User should not have management permissions', () => {
    expect(can(UserRole.User, Permission.MANAGE_USERS)).toBe(false);
  });

  it('Admin should have user management permissions', () => {
    expect(can(UserRole.Admin, Permission.MANAGE_USERS)).toBe(true);
  });
});
