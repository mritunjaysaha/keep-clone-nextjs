import { BsPin, BsPinFill } from 'react-icons/bs';

import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';
import { useAppSelector } from '@/hooks/redux';
import type { Todo } from '@/types/todos/Todo';

export const TodoCard = ({ todoId }: Pick<Todo, 'todoId'>) => {
  const { todos } = useAppSelector((reduxState) => reduxState.user);

  if (!todoId) {
    return <></>;
  }

  const { todoBody, todoTitle, isPinned } = todos[todoId] as Todo;

  const handlePinClick = () => {};

  return (
    <div>
      <div>
        <h3>{todoTitle}</h3>
        <ButtonIcon
          icon={isPinned ? BsPinFill : BsPin}
          size={20}
          tooltip={isPinned ? 'Unpin Note' : 'Pin Note'}
          onClick={handlePinClick}
        ></ButtonIcon>
      </div>
      <div>
        <p>{todoBody}</p>
      </div>
    </div>
  );
};
