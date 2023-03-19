import { Nav } from '@/components/Nav/Nav';
import { NavSide } from '@/components/NavSide/NavSide';

interface ILayouts {
  children: JSX.Element;
}

export function Layouts({ children }: ILayouts) {
  return (
    <section className='h-screen w-screen bg-white text-black dark:bg-slate-900 dark:text-white '>
      {/* head */}
      <Nav />

      {/* body */}
      <section className='flex h-90v w-screen bg-white dark:bg-slate-900'>
        {/* left */}
        <NavSide />
        {/* right */}
        <section className='w-full'>{children}</section>
      </section>
    </section>
  );
}
