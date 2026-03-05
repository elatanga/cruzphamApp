import { describe, it, expect } from 'vitest';
import { creatorService } from '../services/creatorService';

describe('Signup Flow', () => {
  it('should assign creator to manager correctly', async () => {
    const uid = await creatorService.registerCreator(
      { tiktokHandle: '@test' }, 
      'manager-1'
    );
    expect(uid).toBe('creator-uid-123');
  });
});
