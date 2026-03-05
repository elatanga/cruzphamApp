import { UserRole } from '../types';
import { authorize, Permission } from './rbac';

export interface AuthResponse {
  success: boolean;
  error?: string;
  user?: { uid: string; role: UserRole };
}

export interface IAuthService {
  login(email: string, password: string): Promise<AuthResponse>;
  logout(): Promise<void>;
  verifySession(token: string): Promise<boolean>;
}

export class ProductionAuthService implements IAuthService {
  async login(email: string, password: string): Promise<AuthResponse> {
    return { success: true, user: { uid: '123', role: UserRole.User } };
  }

  async logout(): Promise<void> {}

  async verifySession(token: string): Promise<boolean> {
    return !!token;
  }

  // Example of protected action
  async performAdminAction(role: UserRole) {
    authorize(role, Permission.MANAGE_USERS);
    return { status: 'success' };
  }
}

export const authService: IAuthService = new ProductionAuthService();
