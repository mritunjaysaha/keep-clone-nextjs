import { axiosInstance } from '@/request/config/axios';
import type { Todo } from '@/types/todos/Todo';

export const createOrUpdateTodo = async (
  emailId: string,
  todoId: string,
  data: Todo,
) => {
  const res = await axiosInstance.post(`/todos/${emailId}/${todoId}`, data);

  console.log('[postTodo]', res.data);

  return res.data;
};
