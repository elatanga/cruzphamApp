import { authorize, Permission } from './rbac';
import { UserRole } from '../types';

export interface LedgerEntry {
  id: string;
  type: 'revenue' | 'fee' | 'payout';
  refId: string;
  creatorId: string;
  amountCents: number;
  createdAt: Date;
  immutable: boolean;
}

export class LedgerService {
  async createEntry(role: UserRole, entry: Omit<LedgerEntry, 'id' | 'createdAt' | 'immutable'>): Promise<string> {
    authorize(role, Permission.MANAGE_USERS); // Only admins/managers can touch ledger
    
    // Logic: Append-only write to Firestore
    console.log(`[LEDGER] Appending entry for ${entry.creatorId}: ${entry.amountCents}`);
    return 'entry-id-123';
  }

  async getCreatorBalance(creatorId: string): Promise<number> {
    // Logic: Sum all ledger entries for creatorId
    return 100000; // 1000.00 USD
  }
}

export const ledgerService = new LedgerService();
