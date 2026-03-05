export interface PhoneService {
  sendSMS(to: string, message: string): Promise<boolean>;
}