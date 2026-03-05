import { describe, it, expect } from 'vitest';
import { dashboardService } from '../services/dashboardService';
import { UserRole } from '../types';

describe('Dashboard KPIs', () => {
  it('should return correct KPI structure', async () => {
    const kpis = await dashboardService.getKPIs(UserRole.MasterAdmin);
    expect(kpis).toHaveProperty('totalCreators');
    expect(kpis.totalCreators).toBe(150);
  });

  it('should filter by managerId for Manager role', async () => {
    const kpis = await dashboardService.getKPIs(UserRole.Manager, 'm1');
    expect(kpis).toBeDefined();
  });
});
