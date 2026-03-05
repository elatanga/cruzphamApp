export interface AnalyticsMetrics {
  followers: number;
  likes: number;
  engagementRate: number;
}

export interface AnalyticsProvider {
  getMetrics(handle: string): Promise<AnalyticsMetrics>;
}