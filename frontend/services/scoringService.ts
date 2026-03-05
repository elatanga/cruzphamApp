import { authorize, Permission } from './rbac';
import { UserRole } from '../types';

export interface CreatorScore {
  score: number;
  tier: 'Rising' | 'Strong' | 'Elite';
  reasons: string[];
  scoringVersion: string;
}

export class ScoringService {
  private static VERSION = '1.0.0';

  async computeScore(creatorData: any): Promise<CreatorScore> {
    // Deterministic weighted scoring
    const score = Math.min(100, (creatorData.followers / 1000) + (creatorData.engagementRate * 100));
    let tier: 'Rising' | 'Strong' | 'Elite' = 'Rising';
    if (score > 80) tier = 'Elite';
    else if (score > 50) tier = 'Strong';

    return {
      score,
      tier,
      reasons: ['High engagement rate', 'Consistent posting'],
      scoringVersion: ScoringService.VERSION
    };
  }

  async getScore(role: UserRole, creatorId: string): Promise<CreatorScore> {
    // RBAC enforcement
    authorize(role, Permission.VIEW_DASHBOARD);
    return { score: 85, tier: 'Elite', reasons: ['Top performer'], scoringVersion: '1.0.0' };
  }
}

export const scoringService = new ScoringService();
