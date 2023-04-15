import { axiosInstance } from '@/request/config/axios';

export const getAllLabelsByUserId = async () => {
  const { data } = await axiosInstance.get(`/api/labels/641b15d1d33e248a4da4cafe/all`);

  console.log('[getAllLabelsByUserId]', { data });
  return data;
};
