import { EmailService } from '../contracts/EmailService';
import { PhoneService } from '../contracts/PhoneService';

export class MockEmailService implements EmailService {
  async send(to: string, subject: string, body: string): Promise<boolean> {
    console.log(`[MOCK EMAIL] To: ${to}, Subject: ${subject}`);
    return true;
  }
}

export class MockPhoneService implements PhoneService {
  async sendSMS(to: string, message: string): Promise<boolean> {
    console.log(`[MOCK SMS] To: ${to}, Msg: ${message}`);
    return true;
  }
}