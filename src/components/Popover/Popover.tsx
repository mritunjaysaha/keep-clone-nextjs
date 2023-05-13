import { useEffect } from 'react';

import { Portal } from '@/components/Portal/Portal';

// const styles = {
//   popover: {
//     position: 'absolute',
//     transform: 'translate(-50%,100%)',
//   },
// };

// @ts-ignore
export const Popover = ({ children, coords, updateCoords }) => {
  useEffect(() => {
    window.addEventListener('resize', updateCoords);

    return () => window.removeEventListener('resize', updateCoords);
  }, []);

  return (
    <Portal>
      <div
        className='absolute  m-0 -translate-x-1/2 translate-y-10'
        style={{ ...coords }}
      >
        {children}
      </div>
    </Portal>
  );
};
