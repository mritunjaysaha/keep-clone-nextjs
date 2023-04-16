import { axiosInstance } from '@/request/config/axios';
import type { LoginResponse } from '@/types/auth/LoginResponse';

// @ts-ignore
export const login = async (): LoginResponse => {
  const { data } = await axiosInstance.post('/auth/login', {
    email: 'johndoe@foo.com',
    password: '123456',
  });
  return data;
};
