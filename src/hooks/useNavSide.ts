import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setNavSide } from '@/redux/slices/globalSlice';

type NavSideReturn = {
  isNavSideClose: boolean;
  handleNavSide: Function;
};

export function useNavSide(): NavSideReturn {
  const dispatch = useAppDispatch();

  const { isNavSideClose } = useAppSelector((state) => state.global);

  function handleNavSide() {
    dispatch(setNavSide(!isNavSideClose));
  }

  return { isNavSideClose, handleNavSide };
}
