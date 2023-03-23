import { IoMenuSharp } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setMenuClicked, setNavSideClose } from '@/redux/slices/globalSlice';

export function HamburgerMenu() {
  const dispatch = useAppDispatch();

  const { isNavSideClose } = useAppSelector((store) => store.global);

  function handleMenuButtonClick() {
    dispatch(setMenuClicked());
    dispatch(setNavSideClose(!isNavSideClose));
  }

  return (
    <button onClick={handleMenuButtonClick}>
      <IoMenuSharp size={24} />
    </button>
  );
}
