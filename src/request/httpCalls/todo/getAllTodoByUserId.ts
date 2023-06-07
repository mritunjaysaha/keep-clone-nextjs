import { axiosInstance } from '@/request/config/axios';
import type { TodoResponse } from '@/types/todos/TodoResponse';

export const getAllTodoByUserId = async (
  id: string,
  offset: number,
  limit: number,
  sortBy: string,
): Promise<TodoResponse> => {
  if (!id) {
    return { success: false, message: '', todos: [] };
  }

  // eslint-disable-next-line
  console.log('[getAllTodoByUserId]', { id, offset, limit, sortBy });

  const { data } = await axiosInstance.get(
    `/todos/all/${id}?offset=${offset}&limit=${limit}&sortBy=${sortBy}`,
  );

  // eslint-disable-next-line
  console.log('[getAllTodoByUserId]', { data });

  return data as TodoResponse;
};
