import type { MouseEvent } from 'react';
import { useState } from 'react';

export const usePopover = () => {
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

  return {
    isOn,
    coords,
    updateTooltipCoords,
    handleMouseEnter,
    handleMouseLeave,
  };
};
