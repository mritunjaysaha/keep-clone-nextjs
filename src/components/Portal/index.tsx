import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// @ts-ignore
export const Portal = ({ children }) => {
  const mount = document.querySelector('body');
  const el = document.createElement('div');

  // @ts-ignore
  useEffect(() => {
    mount?.appendChild(el);

    return () => mount?.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};
