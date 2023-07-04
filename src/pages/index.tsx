import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { TodoCard } from '@/components/Todo/TodoCard';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { LayoutPage } from '@/layouts/LayoutsPage';
import { setTodos } from '@/redux/slices/userSlice';
import { getAllTodoByUserId } from '@/request/httpCalls/todo/getAllTodoByUserId';
import type { Todo } from '@/types/todos/Todo';

const Home = () => {
  const dispatch = useAppDispatch();

  const { email, todoIds } = useAppSelector((reduxState) => reduxState.user);

  const { data, isFetched } = useQuery('getAllTodos', () => {
    return getAllTodoByUserId(email, 0, 10, 'ASCENDING');
  });

  useEffect(() => {
    if (isFetched && data?.success) {
      // eslint-disable-next-line
      console.log('[Home]', { data });

      dispatch(setTodos(data?.todos as Todo[]));
    }
  }, [isFetched]);

  return (
    <LayoutPage>
      <>
        <p>Home</p>
        {todoIds.map((id) => (
          <TodoCard key={id} todoId={id} />
        ))}
      </>
    </LayoutPage>
  );
};

export default Home;
