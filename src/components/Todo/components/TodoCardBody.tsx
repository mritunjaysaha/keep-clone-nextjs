import parse from 'html-react-parser';

import { useTodoContext } from '@/hooks/useTodoContext';

export const TodoCardBody = () => {
  const { todoBody } = useTodoContext();
  // @ts-ignore
  return <div>{parse(todoBody ?? '')}</div>;
};
