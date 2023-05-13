import { axiosInstance } from '@/request/config/axios';
import type { LabelResponse } from '@/types/labels/LabelResponse';

export const getAllLabelsByUserId = async (
  id: string,
): Promise<LabelResponse> => {
  if (!id) {
    return { success: false, message: '', labels: [] };
  }

  const { data } = await axiosInstance.get(`/labels/${id}/all`);

  console.log('[getAllLabelsByUserId]', { data });
  return data;
};
