import { useRouter } from 'next/router';
import { BsBell, BsLightbulb, BsPencil } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { MdLabelOutline } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';

import { NavButtons } from '@/components/NavSide/components/NavButtons';
import ROUTES from '@/constants/routes.json';
import { useNavSide } from '@/hooks/useNavSide';

export function NavSide() {
  const { isNavSideClose } = useNavSide();
  const router = useRouter();

  function handleButtonNavClick(page: string) {
    router.push(page);
  }

  function checkIsCurrentPage(page: string): boolean {
    return router.pathname.includes(page);
  }

  return (
    <section className={`flex flex-col ${isNavSideClose ? 'w-12' : 'w-60'} h-full`}>
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

      {/* REST OF THE LABELS WILL GO HERE */}
      <NavButtons
        icon={MdLabelOutline}
        label='TBC'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />
      <NavButtons
        icon={MdLabelOutline}
        label='TBC'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />
      <NavButtons
        icon={MdLabelOutline}
        label='TBC'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />
      <NavButtons
        icon={MdLabelOutline}
        label='TBC'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />
      {/* REST OF THE LABELS WILL GO HERE */}

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
