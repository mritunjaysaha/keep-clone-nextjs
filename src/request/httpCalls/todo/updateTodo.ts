import { axiosInstance } from '@/request/config/axios';
import type { Todo } from '@/types/todos/Todo';

export const updateTodo = async (
  email: string,
  todoId: string,
  data: Omit<Todo, 'todoId'>,
) => {
  const res = await axiosInstance.patch(`/todos/${email}/${todoId}`, data);

  return res.data;
};
