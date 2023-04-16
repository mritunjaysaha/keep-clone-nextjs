import { axiosInstance } from '@/request/config/axios';

export const getAllLabelsByUserId = async (id: string) => {
  const { data } = await axiosInstance.get(`/labels/${id}/all`);

  console.log('[getAllLabelsByUserId]', { data });
  return data;
};
