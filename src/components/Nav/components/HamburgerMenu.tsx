import { IoMenuSharp } from 'react-icons/io5';

import { useNavSide } from '@/hooks/useNavSide';

export function HamburgerMenu() {
  const { handleNavSide } = useNavSide();

  function handleMenuButtonClick() {
    console.log('hamburger menu clicked');
    handleNavSide();
  }

  return (
    <button onClick={handleMenuButtonClick}>
      <IoMenuSharp size={24} />
    </button>
  );
}
