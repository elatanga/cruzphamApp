import { AnalyticsProvider, AnalyticsMetrics } from '../contracts/AnalyticsProvider';

export class MockAnalyticsProvider implements AnalyticsProvider {
  async getMetrics(handle: string): Promise<AnalyticsMetrics> {
    return { followers: 1000, likes: 5000, engagementRate: 0.05 };
  }
}