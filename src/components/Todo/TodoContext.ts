import type { MouseEventHandler } from 'react';
import { createContext } from 'react';

import type { Todo } from '@/types/todos/Todo';

type TodoContextType = Todo & {
  isFocused: boolean;
  currentBackgroundColor: string;
  handleSelectBackgroundColor: MouseEventHandler<HTMLDivElement>;
};

const initialState = {} as TodoContextType;

export const TodoContext = createContext<TodoContextType>(initialState);
