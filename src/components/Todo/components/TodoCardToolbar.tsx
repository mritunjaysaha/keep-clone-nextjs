import { useRef, useState } from 'react';
import { BiArchiveIn } from 'react-icons/bi';
import { MdOutlineColorLens } from 'react-icons/md';
import OutsideClickHandler from 'react-outside-click-handler';

import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';
import { BackgroundColorSelector } from '@/components/TakeANote/components/BackgroundColorSelector';
import { useTodoContext } from '@/hooks/useTodoContext';

export const TodoCardToolbar = () => {
  const { handleSelectBackgroundColor, currentBackgroundColor } =
    useTodoContext();

  const [isShowColorSelector, setIsShowColorSelector] = useState(false);

  const ref = useRef(null);

  const handleShowColorSelector = () => {
    setIsShowColorSelector((prev) => !prev);
  };

  return (
    <div ref={ref} onClick={handleSelectBackgroundColor} className={`flex`}>
      <ButtonIcon
        icon={MdOutlineColorLens}
        onClick={handleShowColorSelector}
        tooltip='Background Options'
      />

      {/* <UploadInput onChange={handleFileSelectorChange} multiple /> */}
      <ButtonIcon icon={BiArchiveIn} tooltip='Archive' />

      {isShowColorSelector ? (
        <OutsideClickHandler onOutsideClick={handleShowColorSelector}>
          <BackgroundColorSelector
            currentBackgroundColor={currentBackgroundColor}
          />
        </OutsideClickHandler>
      ) : (
        ''
      )}
    </div>
  );
};
