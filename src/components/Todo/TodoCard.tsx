import type { MouseEventHandler } from 'react';
import { useCallback, useState } from 'react';

import { TodoCardBody } from '@/components/Todo/components/TodoCardBody';
import { TodoCardHeader } from '@/components/Todo/components/TodoCardHeader';
import { TodoCardLabels } from '@/components/Todo/components/TodoCardLabels';
import { TodoCardToolbar } from '@/components/Todo/components/TodoCardToolbar';
import { TodoContext } from '@/components/Todo/TodoContext';
import { editorTheme } from '@/constants/editorTheme';
import { useAppSelector } from '@/hooks/redux';

type TodoProps = { todoId: string };

const { backgroundColor } = editorTheme;

export const TodoCard = ({ todoId }: TodoProps) => {
  const { todos } = useAppSelector((state) => state.user);

  const currentTodo = todos[todoId];

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const [selectedBackground, setSelectedBackground] = useState('');

  const handleMouseEnter = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleSelectBackgroundColor = async (
    e: MouseEventHandler<HTMLDivElement>,
  ) => {
    // @ts-ignore
    e.stopPropagation();

    // @ts-ignore
    const datasetBg: string = e.target.closest('[data-bg]')?.dataset?.bg;

    if (datasetBg) {
      if (datasetBg === 'inherit') {
        setSelectedBackground('inherit');
      } else {
        setSelectedBackground(datasetBg);
      }
      // await updateTodo({ theme: datasetBg });
    }
  };

  // @ts-ignore
  const currentBackgroundColor = backgroundColor[selectedBackground];

  return (
    <TodoContext.Provider
      value={{
        ...currentTodo,
        isFocused,
        // @ts-ignore
        handleSelectBackgroundColor,
      }}
    >
      <div
        className={`relative flex w-60 flex-col gap-4 rounded-md border p-4 dark:border-gray-700 ${currentBackgroundColor}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <div className='absolute -left-1 -top-1 h-5 w-5 rounded-full bg-red-700'></div> */}
        <TodoCardHeader />
        <TodoCardBody />
        <TodoCardLabels />
        <TodoCardToolbar />
      </div>
    </TodoContext.Provider>
  );
};
