import { toast } from 'react-toastify';

import { axiosInstance } from '@/request/config/axios';
import type { Todo } from '@/types/todos/Todo';

export const createOrUpdateTodo = async (
  emailId: string,
  todoId: string,
  data: Todo,
) => {
  const res = await axiosInstance.post(`/todos/${emailId}/${todoId}`, data);

  if (!res.data?.success) {
    toast.error(`${res.data?.message ?? 'Error in updating or creating todo'}`);
  }

  return res.data;
};
