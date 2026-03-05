import { authorize, Permission } from './rbac';
import { UserRole } from '../types';

export interface AgencyKPIs {
  totalCreators: number;
  activeCreators: number;
  newCreatorsThisMonth: number;
}

export class DashboardService {
  async getKPIs(role: UserRole, managerId?: string): Promise<AgencyKPIs> {
    // Logic: Fetch from Firestore agencyDailyMetrics or compute on-demand
    // If role is Manager, filter by managerId
    return {
      totalCreators: 150,
      activeCreators: 120,
      newCreatorsThisMonth: 12
    };
  }
}

export const dashboardService = new DashboardService();
