import { useEffect } from 'react';

import { Portal } from '@/components/Portal';

// const styles = {
//   popover: {
//     position: 'absolute',
//     transform: 'translate(-50%,100%)',
//   },
// };

// @ts-ignore
export const Tooltip = ({ children, coords, updateTooltipCoords }) => {
  useEffect(() => {
    window.addEventListener('resize', updateTooltipCoords);

    return () => window.removeEventListener('resize', updateTooltipCoords);
  }, []);

  return (
    <Portal>
      <div
        className='absolute -translate-x-1/2 translate-y-full bg-red-500'
        style={{ ...coords }}
      >
        {children}
      </div>
    </Portal>
  );
};
