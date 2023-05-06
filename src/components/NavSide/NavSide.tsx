import { useRouter } from 'next/dist/client/router';
import { BsBell, BsLightbulb, BsPencil } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { RiInboxArchiveLine } from 'react-icons/ri';

import { NavButtons } from '@/components/NavSide/components/NavButtons';
import { UserCreatedLabels } from '@/components/NavSide/components/UserCreatedLabels';
import ROUTES from '@/constants/routes.json';
import { useNavSide } from '@/hooks/useNavSide';

export function NavSide() {
  const {
    isNavSideClose,
    isMenuClicked,
    handleMouseEnter,
    handleMouseLeave,
    handleButtonNavClick,
    checkIsCurrentPage,
  } = useNavSide();

  const router = useRouter();

  return (
    <section
      className={`flex flex-col ${
        isNavSideClose ? 'w-16 items-center' : 'w-60'
      } h-full pt-2 ${!isMenuClicked ? 'hover:shadow-xl' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavButtons
        icon={BsLightbulb}
        label='Notes'
        isActive={!router.pathname.split('/')[1]}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          handleButtonNavClick(ROUTES.HOME);
        }}
      />

      <NavButtons
        icon={BsBell}
        label='Reminders'
        isActive={checkIsCurrentPage(ROUTES.REMINDERS)}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          handleButtonNavClick(ROUTES.REMINDERS);
        }}
      />

      <UserCreatedLabels />

      <NavButtons
        icon={BsPencil}
        label='Edit Labels'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          // handleButtonNavClick(ROUTES.LABELS);
        }}
      />

      <NavButtons
        icon={RiInboxArchiveLine}
        label='Archive'
        isActive={checkIsCurrentPage(ROUTES.ARCHIVE)}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          handleButtonNavClick(ROUTES.ARCHIVE);
        }}
      />

      <NavButtons
        icon={HiOutlineTrash}
        label='Trash'
        isActive={checkIsCurrentPage(ROUTES.TRASH)}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          handleButtonNavClick(ROUTES.TRASH);
        }}
      />
    </section>
  );
}
