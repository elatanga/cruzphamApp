import { UserRole } from '../types';

export interface CreatorProfile {
  uid: string;
  tiktokHandle: string;
  assignedManagerId: string;
  status: 'active';
}

export class CreatorService {
  async registerCreator(data: any, managerId: string): Promise<string> {
    // Logic: Save to Firestore, assign manager
    console.log(`[CREATOR] Registered ${data.tiktokHandle} under ${managerId}`);
    return 'creator-uid-123';
  }
}

export const creatorService = new CreatorService();
