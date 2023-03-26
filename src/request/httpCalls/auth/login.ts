import { axiosInstance } from '@/request/config/axios';

export const login = async () => {
  const { data } = await axiosInstance.post('/api/auth/login', {
    email: 'admin@test.com',
    password: '123456',
  });

  return data;
};
