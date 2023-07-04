import { TodoCardBody } from '@/components/Todo/components/TodoCardBody';
import { TodoCardHeader } from '@/components/Todo/components/TodoCardHeader';
import { TodoContext } from '@/components/Todo/TodoContext';
import { useAppSelector } from '@/hooks/redux';

type TodoProps = { todoId: string };

export const TodoCard = ({ todoId }: TodoProps) => {
  const { todos } = useAppSelector((state) => state.user);

  const currentTodo = todos[todoId];

  return (
    <TodoContext.Provider value={{ ...currentTodo }}>
      <TodoCardHeader />
      <TodoCardBody />
    </TodoContext.Provider>
  );
};
