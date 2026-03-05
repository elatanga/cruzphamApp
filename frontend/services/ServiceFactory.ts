import { EmailService } from './contracts/EmailService';
import { PhoneService } from './contracts/PhoneService';
import { MockEmailService, MockPhoneService } from './mock/MockServices';

const isDev = process.env.NODE_ENV === 'development' && process.env.LOCAL_DEV === 'true';

export class ServiceFactory {
  static getEmailService(): EmailService {
    if (isDev) return new MockEmailService();
    if (process.env.NODE_ENV === 'production') {
      // Return Production Implementation
      throw new Error("Production Email Service not yet implemented");
    }
    throw new Error("Environment configuration invalid");
  }

  static getPhoneService(): PhoneService {
    if (isDev) return new MockPhoneService();
    if (process.env.NODE_ENV === 'production') {
      throw new Error("Production Phone Service not yet implemented");
    }
    throw new Error("Environment configuration invalid");
  }
}