export class RateLimiter {
  static async check(key: string, limit: number, windowMs: number): Promise<boolean> {
    // Logic: Check Firestore for request count in window
    // If count > limit, return false
    return true;
  }
}
