import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Todo } from '@/types/todos/Todo';
import { debounce } from '@/utils/debounce';

type TodoFormData = Pick<Todo, 'title' | 'body'>;

export function TakeANote() {
  const { register, handleSubmit } = useForm<TodoFormData>();

  const onSubmit: SubmitHandler<TodoFormData> = (data) => {
    console.log(data);
  };

  const debounceSubmit = debounce(handleSubmit(onSubmit), 500);

  return (
    <section
      className={`box-shadow-editor mx-auto my-8 flex h-max
       w-50vw flex-col justify-center rounded-md bg-inherit p-4`}
    >
      <form
        className='flex w-full flex-col gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          {...register('title', {
            onChange: () => {
              debounceSubmit();
            },
          })}
          placeholder='Title'
          rows={1}
          className='w-full resize-none overflow-hidden rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none'
        />
        <textarea
          {...register('body', {
            onChange: (e) => {
              debounceSubmit();

              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
            },
          })}
          placeholder='Take a note...'
          className='w-full resize-none overflow-hidden rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none'
          rows={2}
        />
      </form>
    </section>
  );
}
