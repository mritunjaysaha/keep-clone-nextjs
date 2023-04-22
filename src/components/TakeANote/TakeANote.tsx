import type { ChangeEvent } from 'react';
import { useState } from 'react';

import type { Todo } from '@/types/todos/Todo';

export function TakeANote() {
  const [todo, setTodo] = useState<Pick<Todo, 'title' | 'body'>>({
    title: '',
    body: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;
    setTodo((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <section
      className={`box-shadow-editor mx-auto my-8 flex h-max
       w-50vw flex-col justify-center rounded-md bg-inherit p-2`}
    >
      <form className='w-2/3'>
        <input
          id='title'
          className='w-full bg-inherit'
          value={todo.title}
          onChange={handleChange}
          placeholder='Title'
        />
        <input
          id='body'
          className='w-full bg-inherit'
          value={todo.body}
          onChange={handleChange}
          placeholder='Take a note...'
        />
      </form>
    </section>
  );
}
