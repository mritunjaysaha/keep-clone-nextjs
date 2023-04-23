import type { TextareaHTMLAttributes } from 'react';

export function TextArea({
  rows = 1,
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={rows}
      className='max-h-96 w-full resize-none overflow-auto rounded bg-inherit py-2 px-3  leading-tight text-gray-700 focus:outline-none dark:text-gray-300'
      {...rest}
    />
  );
}
