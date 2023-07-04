import { useTodoContext } from '@/hooks/useTodoContext';

export const TodoCardHeader = () => {
  const { todoTitle } = useTodoContext();

  return <h3>{todoTitle}</h3>;
};
