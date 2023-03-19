import { ModeSwitch } from '@/components/ModeSwitch/ModeSwitch';
import { HamburgerMenu } from '@/components/Nav/components/HamburgerMenu';
import { SearchInput } from '@/components/Nav/components/SearchInput';

export function Nav() {
  return (
    <nav className='flex w-screen items-center justify-between border-b-2 border-gray-200 p-2'>
      <HamburgerMenu />
      <SearchInput placeholder='Search' />
      <ModeSwitch />
    </nav>
  );
}
