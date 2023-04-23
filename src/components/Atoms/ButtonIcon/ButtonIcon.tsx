import type { MouseEventHandler } from 'react';

type ButtonIconProps = {
  icon: any;
  size: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function ButtonIcon({ icon: Icon, size, ...rest }: ButtonIconProps) {
  return (
    <button
      className='m-2 flex items-center rounded-full p-2 hover:bg-slate-100'
      {...rest}
    >
      <Icon size={size} />
    </button>
  );
}
