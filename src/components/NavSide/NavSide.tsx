import { BsBell, BsLightbulb, BsPencil } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { MdLabelOutline } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';

import { NavButtons } from '@/components/NavSide/components/NavButtons';
import { useNavSide } from '@/hooks/useNavSide';

export function NavSide() {
  const { isNavSideClose } = useNavSide();

  return (
    <section className={`flex flex-col ${isNavSideClose ? 'w-12' : 'w-60'} h-full`}>
      <NavButtons
        icon={BsLightbulb}
        label='Notes'
        isActive={true}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />

      <NavButtons
        icon={BsBell}
        label='Reminders'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
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
          console.log('notes clicked');
        }}
      />

      <NavButtons
        icon={RiInboxArchiveLine}
        label='Archive'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />

      <NavButtons
        icon={HiOutlineTrash}
        label='Trash'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />
    </section>
  );
}
