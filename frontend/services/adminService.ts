import { authorize, Permission } from './rbac';
import { UserRole } from '../types';

export class AdminService {
  async removeUser(adminRole: UserRole, targetUid: string, targetRole: UserRole) {
    authorize(adminRole, Permission.MANAGE_ADMINS);
    
    if (targetRole === UserRole.MasterAdmin) {
      throw new Error('Security Violation: Cannot remove MasterAdmin');
    }
    
    console.log(`[ADMIN] Removed user ${targetUid}`);
    return true;
  }
}

export const adminService = new AdminService();
