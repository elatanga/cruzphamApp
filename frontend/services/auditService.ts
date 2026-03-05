export interface AuditLog {
  action: string;
  actorUid?: string;
  requestId: string;
  timestamp: Date;
  metadata: Record<string, any>;
}

export class AuditService {
  static async log(log: Omit<AuditLog, 'timestamp'>): Promise<void> {
    // Logic: Write to Firestore 'auditLogs' collection
    // Ensure no PII is passed in metadata
    console.log(`[AUDIT] ${log.action} by ${log.actorUid || 'anonymous'}`);
  }
}
