import { AnalyticsProvider } from './contracts/AnalyticsProvider';
import { MockAnalyticsProvider } from './mock/MockAnalyticsProvider';
import { ProductionAnalyticsProvider } from './prod/ProductionAnalyticsProvider';

export class AnalyticsFactory {
  static getProvider(): AnalyticsProvider {
    const isDev = process.env.NODE_ENV === 'development' && process.env.LOCAL_DEV === 'true';
    if (isDev) return new MockAnalyticsProvider();
    if (process.env.NODE_ENV === 'production') {
      return new ProductionAnalyticsProvider();
    }
    throw new Error("Invalid environment for AnalyticsProvider");
  }
}