import type { MouseEvent, MouseEventHandler } from 'react';
import { createRef, useState } from 'react';

import { Tooltip } from '@/components/Tooltip';

type ButtonIconProps = {
  icon: any;
  size?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
};

const btnRef = createRef();

export function ButtonIcon({
  icon: Icon,
  size = 20,
  tooltip,
  ...rest
}: ButtonIconProps) {
  const [isOn, setOn] = useState<boolean>(false);
  const [coords, setCoords] = useState({});

  // @ts-ignore
  const updateTooltipCoords = (button) => {
    const rect = button.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2, // add half the width of the button for centering
      top: rect.y + window.scrollY, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const { target } = e;

    // @ts-ignore
    updateTooltipCoords(target.closest('button'));
    setOn(true);
  };

  const handleMouseLeave = () => {
    setOn(false);
  };

  return (
    <>
      <button
        className='m-2 flex items-center rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        <Icon size={size} />
      </button>
      {isOn && tooltip && (
        <Tooltip
          coords={coords}
          updateTooltipCoords={() =>
            // @ts-ignore
            updateTooltipCoords(btnRef.current.buttonNode)
          }
        >
          <p className='rounded-md bg-black px-2 py-1 text-xs text-white opacity-80'>
            {tooltip}
          </p>
        </Tooltip>
      )}
    </>
  );
}
