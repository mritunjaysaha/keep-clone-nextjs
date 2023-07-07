import { useState } from 'react';
import { BsPin, BsPinFill } from 'react-icons/bs';

import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';
import { useTodoContext } from '@/hooks/useTodoContext';

export const TodoCardHeader = () => {
  const { todoTitle, isPinned, isFocused } = useTodoContext();

  const [isCardPinned, setIsCardPinned] = useState(isPinned);

  const handlePinClick = () => {
    setIsCardPinned((prevIsCardPinned) => !prevIsCardPinned);
  };

  return (
    <div className='flex justify-between'>
      <h3>{todoTitle}</h3>
      <div className={!isFocused ? 'opacity-0' : 'opacity-100'}>
        <ButtonIcon
          icon={isCardPinned ? BsPinFill : BsPin}
          size={20}
          tooltip={isCardPinned ? 'Unpin Note' : 'Pin Note'}
          onClick={handlePinClick}
        ></ButtonIcon>
      </div>
    </div>
  );
};
