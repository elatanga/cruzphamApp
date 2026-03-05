import { describe, it, expect } from 'vitest';
import { ledgerService } from '../services/ledgerService';
import { UserRole } from '../types';

describe('Ledger System', () => {
  it('should calculate balance correctly', async () => {
    const balance = await ledgerService.getCreatorBalance('creator-1');
    expect(balance).toBeGreaterThanOrEqual(0);
  });

  it('should deny unauthorized ledger access', async () => {
    await expect(ledgerService.createEntry(UserRole.User, {
      type: 'revenue',
      refId: 'deal-1',
      creatorId: 'creator-1',
      amountCents: 5000
    })).rejects.toThrow('Forbidden');
  });
});
