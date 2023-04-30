import { createRef, useState } from 'react';
import { BiArchiveIn } from 'react-icons/bi';
import { BsPin, BsPinFill } from 'react-icons/bs';
import { GoKebabVertical } from 'react-icons/go';
import { IoImageOutline } from 'react-icons/io5';
import { MdOutlineColorLens } from 'react-icons/md';
import OutsideClickHandler from 'react-outside-click-handler';

import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';
import { TextArea } from '@/components/Atoms/TextArea/TextArea';
import { BackgroundColorSelector } from '@/components/TakeANote/BackgroundColorSelector';
import { Tooltip } from '@/components/Tooltip';
import { useTakeANote } from '@/hooks/useTakeANote';

const btnRef = createRef();

export function TakeANote() {
  const {
    ref,
    state,
    register,
    handleSubmit,
    onSubmit,
    handleTextAreaChange,
    backgroundColor,
    handlePinClick,
    handleTakeANoteClicked,
    handleShowColorSelector,
    handleSelectBackgroundColor,
  } = useTakeANote();

  const [isOn, setOn] = useState(false); // toggles dropdown visibility
  const [coords, setCoords] = useState({}); // takes current button coordinates

  // @ts-ignore
  const updateTooltipCoords = (button) => {
    const rect = button.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2, // add half the width of the button for centering
      top: rect.y + window.scrollY, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
  };

  return (
    <section
      ref={ref}
      className={`box-shadow-editor mx-auto my-8 flex min-h-0
       w-50vw flex-col justify-center rounded-md ${backgroundColor} p-4 `}
    >
      <OutsideClickHandler onOutsideClick={() => handleTakeANoteClicked(false)}>
        {!state.isTakeANoteClicked && (
          <p
            onClick={() => {
              handleTakeANoteClicked(true);
            }}
            className='px-3 text-slate-500'
          >
            Take a note ...
          </p>
        )}
        {state.isTakeANoteClicked && (
          <>
            <form
              className='flex w-full flex-col gap-4'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='flex items-baseline'>
                <TextArea
                  {...register('title', {
                    onChange: handleTextAreaChange,
                  })}
                  placeholder='Title'
                />
                <ButtonIcon
                  icon={state.isPinned ? BsPinFill : BsPin}
                  size={20}
                  onClick={handlePinClick}
                ></ButtonIcon>
              </div>{' '}
              <TextArea
                {...register('body', {
                  onChange: handleTextAreaChange,
                })}
                placeholder='Take a note...'
                rows={2}
              />
            </form>

            <div
              className='flex flex-col'
              onClick={handleSelectBackgroundColor}
            >
              <div className='flex gap-1'>
                <ButtonIcon
                  icon={MdOutlineColorLens}
                  onClick={handleShowColorSelector}
                />
                <ButtonIcon
                  icon={IoImageOutline}
                  onClick={(e) => {
                    updateTooltipCoords(e.target);
                    setOn(!isOn);
                  }}
                />
                <ButtonIcon icon={BiArchiveIn} />
                <ButtonIcon icon={GoKebabVertical} />
              </div>
              {state.showColorSelector ? (
                <BackgroundColorSelector
                  currentBackgroundColor={state.selectedBackground}
                />
              ) : (
                ''
              )}
            </div>

            {isOn && (
              <Tooltip
                coords={coords}
                updateTooltipCoords={() =>
                  // @ts-ignore
                  updateTooltipCoords(btnRef.current.buttonNode)
                }
              >
                <p>button</p>
              </Tooltip>
            )}
          </>
        )}
      </OutsideClickHandler>
    </section>
  );
}
