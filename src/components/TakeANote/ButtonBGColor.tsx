import type { MouseEvent } from 'react';
import { useState } from 'react';

import { Tooltip } from '@/components/Tooltip';
import { editorTheme } from '@/constants/editorTheme';

type ButtonBgColorProps = {
  color: string;
  isCurrentColor: boolean;
  children?: JSX.Element;
  tooltip?: string;
};

const { buttonColor } = editorTheme;

export const ButtonBGColor = ({
  color,
  children,
  isCurrentColor,
  tooltip,
}: ButtonBgColorProps) => {
  const activeButtonClass = isCurrentColor
    ? 'border-purple-500'
    : 'border-transparent';

  // @ts-ignore
  const currentButtonColor = buttonColor[color] as string;

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
    updateTooltipCoords(target);
    setOn(true);
  };

  const handleMouseLeave = () => {
    setOn(false);
  };

  return (
    <>
      <button
        key={color}
        data-bg={color}
        // eslint-disable-next-line
        className={`flex justify-center items-center h-7 w-7 rounded-full ${currentButtonColor} border-2 hover:border-black ${activeButtonClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
      {isOn && tooltip && (
        <Tooltip
          coords={coords}
          updateTooltipCoords={() =>
            // @ts-ignore
            updateTooltipCoords(btnRef.current.buttonNode)
          }
        >
          <p className='rounded-md bg-black px-2 py-1 text-xs capitalize text-white opacity-80'>
            {tooltip}
          </p>
        </Tooltip>
      )}
    </>
  );
};
