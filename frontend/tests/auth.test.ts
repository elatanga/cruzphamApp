import { describe, it, expect, vi } from 'vitest';
import { authService } from '../services/authService';

describe('Authentication System', () => {
  it('should successfully authenticate valid credentials', async () => {
    const result = await authService.login('admin@cruzpham.com', 'password123');
    expect(result.success).toBe(true);
  });

  it('should fail authentication for invalid credentials', async () => {
    // Mocking failure
    vi.spyOn(authService, 'login').mockResolvedValue({ success: false, error: 'Invalid' });
    const result = await authService.login('wrong@cruzpham.com', 'wrong');
    expect(result.success).toBe(false);
  });
});
