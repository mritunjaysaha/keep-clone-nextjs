import { axiosInstance } from '@/request/config/axios';
import type { Todo } from '@/types/todos/Todo';

export const postTodo = async (emailId: string, data: Todo) => {
  const res = await axiosInstance.post(`/todos/${emailId}`, data);

  console.log('[postTodo]', res.data);

  return res.data;
};
