import { Popover } from '@/components/Popover/Popover';

// @ts-ignore
export const Tooltip = ({ tooltip, coords, updateTooltipCoords }) => {
  return (
    <Popover coords={coords} updateTooltipCoords={updateTooltipCoords}>
      <p className='rounded-md bg-black px-2 py-1 text-xs capitalize text-white opacity-80'>
        {tooltip}
      </p>
    </Popover>
  );
};
