import { BsLightbulb } from 'react-icons/bs';

import { NavButtons } from '@/components/NavSide/components/NavButtons';
import { useNavSide } from '@/hooks/useNavSide';

export function NavSide() {
  const { isNavSideClose } = useNavSide();

  return (
    <section className={`flex flex-col ${isNavSideClose ? 'w-12' : 'w-60'} h-full`}>
      <NavButtons
        icon={BsLightbulb}
        label='notes'
        isActive={true}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />

      <NavButtons
        icon={BsLightbulb}
        label='notes'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />

      <NavButtons
        icon={BsLightbulb}
        label='notes'
        isActive={false}
        isNavSideClose={isNavSideClose}
        onClick={() => {
          console.log('notes clicked');
        }}
      />
    </section>
  );
}
