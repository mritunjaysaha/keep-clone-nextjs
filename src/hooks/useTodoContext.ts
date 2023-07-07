import { useContext } from 'react';

import { TodoContext } from '@/components/Todo/TodoContext';

export const useTodoContext = () => useContext(TodoContext);
