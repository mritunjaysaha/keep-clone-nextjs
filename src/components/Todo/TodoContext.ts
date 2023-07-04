import { createContext } from 'react';

import type { Todo } from '@/types/todos/Todo';

type TodoContextType = Todo & { isFocused: boolean };

const initialState = {} as TodoContextType;

export const TodoContext = createContext<TodoContextType>(initialState);
