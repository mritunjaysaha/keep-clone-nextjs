import type { MouseEventHandler } from 'react';
import { createRef } from 'react';

import { Tooltip } from '@/components/Tooltip/Tooltip';
import { usePopover } from '@/hooks/usePopover';

type ButtonIconProps = {
  icon: any;
  size?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  disabled?: boolean;
};

const btnRef = createRef();

export function ButtonIcon({
  icon: Icon,
  size = 20,
  tooltip,
  ...rest
}: ButtonIconProps) {
  const {
    isOn,
    coords,
    updateTooltipCoords,
    handleMouseEnter,
    handleMouseLeave,
  } = usePopover();

  return (
    <>
      <button
        className='m-2 flex items-center rounded-full p-2 hover:bg-gray-100 disabled:opacity-50'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        <Icon size={size} />
      </button>
      {isOn && tooltip && (
        <Tooltip
          tooltip={tooltip}
          coords={coords}
          updateTooltipCoords={() => {
            // @ts-ignore
            updateTooltipCoords(btnRef.current.buttonNode);
          }}
        />
      )}
    </>
  );
}
