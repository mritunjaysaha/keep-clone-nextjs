import type { ResponseType } from '@/types/ResponseType';
import type { Todo } from '@/types/todos/Todo';

type TodoList = { todos: Todo[] };

export type TodoResponse = ResponseType & TodoList;
