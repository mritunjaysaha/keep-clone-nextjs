import { BiArchiveIn } from 'react-icons/bi';
import { BsPin, BsPinFill } from 'react-icons/bs';
import { GoKebabVertical } from 'react-icons/go';
import { IoImageOutline } from 'react-icons/io5';
import { MdOutlineColorLens } from 'react-icons/md';
import OutsideClickHandler from 'react-outside-click-handler';

import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';
import { TextArea } from '@/components/Atoms/TextArea/TextArea';
import { BackgroundColorSelector } from '@/components/TakeANote/BackgroundColorSelector';
import { useTakeANote } from '@/hooks/useTakeANote';

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
                <ButtonIcon icon={IoImageOutline} />
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
          </>
        )}
      </OutsideClickHandler>
    </section>
  );
}
