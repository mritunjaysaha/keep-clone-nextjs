import type { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
};

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className='h-max rounded-md bg-inherit px-6 py-1 hover:bg-gray-100'
      {...rest}
    >
      {children}
    </button>
  );
};
