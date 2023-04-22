import type { ChangeEvent } from 'react';
import { useState } from 'react';

import type { Todo } from '@/types/todos/Todo';

export function TakeANote() {
  const [todo, setTodo] = useState<Pick<Todo, 'title' | 'body'>>({ title: '', body: '' });
  const [isActive, setIsActive] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;
    setTodo({ ...todo, [id]: value });
  }

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <section
      className={`box-shadow-editor mx-auto my-8 flex ${
        isActive ? 'h-max' : 'h-12'
      } w-50vw flex-col justify-center rounded-md bg-slate-300 p-2`}
      onBlur={handleActive}
    >
      <form className='w-2/3'>
        {isActive && (
          <input id='title' className='w-full bg-inherit' value={todo.title} placeholder='Title' />
        )}
        <input
          id='body'
          className='w-full bg-inherit'
          value={todo.body}
          onChange={handleChange}
          placeholder='Take a note...'
          onClick={handleActive}
        />
      </form>
    </section>
  );
}
