import { UserRole } from '../types';

export enum Permission {
  MANAGE_USERS = 'MANAGE_USERS',
  MANAGE_ADMINS = 'MANAGE_ADMINS',
  VIEW_DASHBOARD = 'VIEW_DASHBOARD',
  SYSTEM_CONFIG = 'SYSTEM_CONFIG'
}

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.MasterAdmin]: Object.values(Permission),
  [UserRole.Admin]: [Permission.MANAGE_USERS, Permission.VIEW_DASHBOARD],
  [UserRole.Manager]: [Permission.VIEW_DASHBOARD],
  [UserRole.User]: [Permission.VIEW_DASHBOARD]
};

export const can = (role: UserRole, permission: Permission): boolean => {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
};

export const authorize = (role: UserRole, permission: Permission) => {
  if (!can(role, permission)) {
    console.warn(`[AUTH_DENIED] Role: ${role} attempted ${permission}`);
    throw new Error('Forbidden: Insufficient permissions');
  }
};
