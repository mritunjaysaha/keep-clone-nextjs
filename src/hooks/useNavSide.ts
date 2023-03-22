import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setNavSideClose } from '@/redux/slices/globalSlice';

type NavSideReturn = {
  isNavSideClose: boolean;
  handleNavSide: Function;
};

export function useNavSide(): NavSideReturn {
  const dispatch = useAppDispatch();

  const { isNavSideClose } = useAppSelector((state) => state.global);

  function handleNavSide() {
    dispatch(setNavSideClose(!isNavSideClose));
  }

  return { isNavSideClose, handleNavSide };
}
