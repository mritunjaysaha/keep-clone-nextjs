import { BiArchiveIn, BiRedo, BiUndo } from 'react-icons/bi';
import { BsPin, BsPinFill } from 'react-icons/bs';
import { MdOutlineColorLens, MdOutlineNewLabel } from 'react-icons/md';
import OutsideClickHandler from 'react-outside-click-handler';

import { Button } from '@/components/Atoms/Button/Button';
import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';
import { LabelMenu } from '@/components/LabelMenu/LabelMenu';
import { BackgroundColorSelector } from '@/components/TakeANote/components/BackgroundColorSelector';
import { LinkLabel } from '@/components/TakeANote/components/LinkLabel';
import ROUTES from '@/constants/routes.json';
import { useAppSelector } from '@/hooks/redux';
import { usePopover } from '@/hooks/usePopover';
import { useTakeANote } from '@/hooks/useTakeANote';

export function TakeANote() {
  const {
    ref,
    state,
    register,
    handleSubmit,
    onSubmit,
    handlePinClick,
    handleRemoveLabels,
    handleSelectedLabels,
    handleTextAreaChange,
    handleTakeANoteClicked,
    handleShowColorSelector,
    // handleFileSelectorChange,
    handleSelectBackgroundColor,
    currentBackgroundColor,
  } = useTakeANote();

  const { isOn, coords, handleClick: handleLabelMenuClick } = usePopover();

  const { labels } = useAppSelector((reduxState) => reduxState.user);

  return (
    <OutsideClickHandler
      onOutsideClick={() => handleTakeANoteClicked(false)}
      disabled={isOn}
      key={Date.now()}
    >
      <section
        ref={ref}
        className={`box-shadow-editor relative mx-auto my-8 flex min-h-0
       w-50vw flex-col justify-center rounded-md ${currentBackgroundColor} p-2`}
        onClick={handleSelectBackgroundColor}
      >
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
                <textarea
                  {...register('todoTitle', {
                    onChange: handleTextAreaChange,
                  })}
                  placeholder='Title'
                  className='textarea'
                />
                <ButtonIcon
                  icon={state.isPinned ? BsPinFill : BsPin}
                  size={20}
                  tooltip={state.isPinned ? 'Unpin Note' : 'Pin Note'}
                  onClick={handlePinClick}
                ></ButtonIcon>
              </div>{' '}
              <textarea
                {...register('todoBody', {
                  onChange: handleTextAreaChange,
                })}
                placeholder='Take a note...'
                rows={2}
                className='textarea'
              />
            </form>

            <div className='flex h-8 w-full flex-wrap gap-2'>
              {Object.keys(state.selectedLabels).map((labelId) => {
                const showLabel = state.selectedLabels[labelId];

                if (showLabel) {
                  return (
                    <LinkLabel
                      key={labelId}
                      labelName={labels[labelId]?.labelName as string}
                      removeLabelHandler={() => {
                        handleRemoveLabels(labelId);
                      }}
                      href={`${ROUTES.LABELS}/${labelId}`}
                    />
                  );
                }

                return <></>;
              })}
            </div>

            <div className='relative flex h-max items-center justify-between'>
              <div className='flex gap-1'>
                <ButtonIcon
                  icon={MdOutlineColorLens}
                  onClick={handleShowColorSelector}
                  tooltip='Background Options'
                />

                {/* <UploadInput onChange={handleFileSelectorChange} multiple /> */}
                <ButtonIcon icon={BiArchiveIn} tooltip='Archive' />
                <ButtonIcon
                  icon={MdOutlineNewLabel}
                  tooltip='Add label'
                  onClick={handleLabelMenuClick}
                />
                <ButtonIcon disabled={true} icon={BiUndo} tooltip='Undo' />
                <ButtonIcon disabled={true} icon={BiRedo} tooltip='Redo' />
              </div>
              <Button onClick={() => handleTakeANoteClicked(false)}>
                <span>Close</span>
              </Button>
            </div>

            {state.showColorSelector ? (
              <OutsideClickHandler onOutsideClick={handleShowColorSelector}>
                <BackgroundColorSelector
                  currentBackgroundColor={state.selectedBackground}
                />
              </OutsideClickHandler>
            ) : (
              ''
            )}

            {isOn && (
              // <OutsideClickHandler

              //   onOutsideClick={(e) => {
              //     // @ts-ignore
              //     // handleLabelMenuClick(e);
              //   }}
              // >
              <LabelMenu
                coords={coords}
                selectedLabels={state.selectedLabels}
                handleSelectedLabels={handleSelectedLabels}
              />
              // </OutsideClickHandler>
            )}
          </>
        )}
      </section>
    </OutsideClickHandler>
  );
}
