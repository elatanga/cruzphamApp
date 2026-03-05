export enum UserRole {
  MasterAdmin = 'MasterAdmin',
  Admin = 'Admin',
  Manager = 'Manager',
  User = 'User'
}

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  status: 'active' | 'suspended';
}