import { describe, it, expect } from 'vitest';
import { creatorGroupingService } from '../services/creatorGroupingService';
import { UserRole } from '../types';

describe('Creator Grouping & Ownership', () => {
  it('should reject unauthorized manager edits', async () => {
    await expect(creatorGroupingService.updateCreator(
      UserRole.Manager, 
      'wrong-manager', 
      'creator-1', 
      {}
    )).rejects.toThrow('Forbidden');
  });

  it('should allow Admin to edit any creator', async () => {
    const result = await creatorGroupingService.updateCreator(
      UserRole.Admin, 
      'any-manager', 
      'creator-1', 
      {}
    );
    expect(result).toBe(true);
  });
});
