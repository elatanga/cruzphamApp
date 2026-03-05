import { describe, it, expect } from 'vitest';
import { scoringService } from '../services/scoringService';

describe('Scoring Engine', () => {
  it('should assign correct tier based on score', async () => {
    const result = await scoringService.computeScore({ followers: 10000, engagementRate: 0.1 });
    expect(result.tier).toBe('Elite');
    expect(result.scoringVersion).toBe('1.0.0');
  });

  it('should produce deterministic output for fixed input', async () => {
    const result = await scoringService.computeScore({ followers: 1000, engagementRate: 0.05 });
    expect(result.score).toBe(15);
  });
});
