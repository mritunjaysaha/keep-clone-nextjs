import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { BsPin, BsPinFill } from 'react-icons/bs';

import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';
import { TextArea } from '@/components/Atoms/TextArea/TextArea';
import type { Todo } from '@/types/todos/Todo';
import { debounce } from '@/utils/debounce';

type TodoFormData = Pick<Todo, 'title' | 'body'>;

export function TakeANote() {
  const { register, handleSubmit } = useForm<TodoFormData>();
  const [isPinned, setIsPinned] = useState(false);

  const onSubmit: SubmitHandler<TodoFormData> = (data) => {
    console.log(data);
  };

  const debounceSubmit = debounce(handleSubmit(onSubmit), 500);

  function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    debounceSubmit();

    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <section
      className={`box-shadow-editor mx-auto my-8 flex min-h-0
       w-50vw flex-col justify-center rounded-md bg-inherit p-4`}
    >
      <form
        className='flex w-full flex-col gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex'>
          <TextArea
            {...register('title', {
              onChange: handleTextAreaChange,
            })}
            placeholder='Title'
          />
          <ButtonIcon
            icon={isPinned ? BsPinFill : BsPin}
            size={20}
            onClick={() => {
              setIsPinned(!isPinned);
            }}
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
    </section>
  );
}
