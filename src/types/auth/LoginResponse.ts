import type { User } from '@/types/user/User';

export interface LoginResponse {
  token: string;
  user: User;
}
