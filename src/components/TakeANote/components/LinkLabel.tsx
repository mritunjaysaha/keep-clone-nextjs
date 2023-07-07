import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';
import { createRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import { Tooltip } from '@/components/Tooltip/Tooltip';
import { usePopover } from '@/hooks/usePopover';

type LinkLabelProps = {
  labelName: string;
  removeLabelHandler: MouseEventHandler<HTMLButtonElement>;
} & LinkProps;

const btnRef = createRef();

export const LinkLabel = ({
  labelName,
  removeLabelHandler,
  ...rest
}: LinkLabelProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const {
    isOn,
    coords,
    updateTooltipCoords,
    handleMouseEnter,
    handleMouseLeave,
  } = usePopover();

  return (
    <Link
      {...rest}
      className='flex h-8 w-max items-center gap-1 rounded-full border-0 bg-slate-300  p-2 text-[10px] text-black hover:border-0 dark:border dark:border-light dark:bg-inherit dark:text-light'
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <p
        className={`${
          isHover ? 'max-w-[4ch] truncate' : ''
        } text-black dark:text-light`}
        onMouseEnter={() => {
          setIsHover(true);
        }}
      >
        {labelName}
      </p>
      <button
        className={`${
          isHover ? 'flex items-center' : 'hidden'
        } m-0 h-8 p-0 text-sm text-black dark:text-light`}
        onClick={removeLabelHandler}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IoIosClose size={16} color='text-inherit' />
      </button>

      {isOn && (
        <Tooltip
          tooltip='Remove label'
          coords={coords}
          updateTooltipCoords={() => {
            // @ts-ignore
            updateTooltipCoords(btnRef.current.buttonNode);
          }}
        />
      )}
    </Link>
  );
};
