import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Todo } from '@/types/todos/Todo';

type TodoFormData = Pick<Todo, 'title' | 'body'>;

export function TakeANote() {
  const { register, handleSubmit } = useForm<TodoFormData>();

  const onSubmit: SubmitHandler<TodoFormData> = (data) => {
    console.log(data);
  };

  function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number,
  ) {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return function (this: unknown, ...args: Parameters<T>) {
      const that = this;

      clearTimeout(timer);

      timer = setTimeout(function () {
        func.apply(that, args);
      }, delay);
    };
  }

  const debounceSubmit = debounce(handleSubmit(onSubmit), 500);

  return (
    <section
      className={`box-shadow-editor mx-auto my-8 flex h-max
       w-50vw flex-col justify-center rounded-md bg-inherit p-4`}
    >
      <form
        className='flex w-2/3 flex-col gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('title', {
            onChange: () => {
              debounceSubmit();
            },
          })}
          placeholder='Title'
        />
        <input
          {...register('body', {
            onChange: () => {
              debounceSubmit();
            },
          })}
          placeholder='Take a note...'
        />
      </form>
    </section>
  );
}
