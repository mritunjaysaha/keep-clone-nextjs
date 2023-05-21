import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';
import { IoIosClose } from 'react-icons/io';

import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';

type LinkLabelProps = {
  labelName: string;
  removeLabelHandler: MouseEventHandler<HTMLButtonElement>;
} & LinkProps;

export const LinkLabel = ({
  labelName,
  removeLabelHandler,
  ...rest
}: LinkLabelProps) => {
  return (
    <Link
      className='flex items-center gap-1 rounded-full border pl-2 text-[10px] text-white'
      {...rest}
    >
      <span>{labelName}</span>

      <ButtonIcon
        icon={IoIosClose}
        onClick={removeLabelHandler}
        tooltip='remove label'
        noPadding={true}
        size={20}
      />
    </Link>
  );
};
