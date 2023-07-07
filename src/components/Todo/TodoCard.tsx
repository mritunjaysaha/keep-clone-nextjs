import { useCallback, useState } from 'react';

import { TodoCardBody } from '@/components/Todo/components/TodoCardBody';
import { TodoCardHeader } from '@/components/Todo/components/TodoCardHeader';
import { TodoCardLabels } from '@/components/Todo/components/TodoCardLabels';
import { TodoContext } from '@/components/Todo/TodoContext';
import { useAppSelector } from '@/hooks/redux';

type TodoProps = { todoId: string };

export const TodoCard = ({ todoId }: TodoProps) => {
  const { todos } = useAppSelector((state) => state.user);

  const currentTodo = todos[todoId];

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <TodoContext.Provider value={{ ...currentTodo, isFocused }}>
      <div
        className='relative flex w-60 flex-col gap-4 rounded-md border p-4 dark:border-gray-700'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <div className='absolute -left-1 -top-1 h-5 w-5 rounded-full bg-red-700'></div> */}
        <TodoCardHeader />
        <TodoCardBody />
        <TodoCardLabels />
      </div>
    </TodoContext.Provider>
  );
};
