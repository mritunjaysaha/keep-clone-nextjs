import { createContext } from 'react';

import type { Todo } from '@/types/todos/Todo';

const initialState = {} as Todo;

export const TodoContext = createContext<Todo>(initialState);
