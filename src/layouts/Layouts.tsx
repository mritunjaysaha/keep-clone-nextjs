import { Nav } from '@/components/Nav/Nav';
import { NavSide } from '@/components/NavSide/NavSide';

interface ILayouts {
  children: JSX.Element;
}

export function Layouts({ children }: ILayouts) {
  return (
    <section className='h-screen w-screen bg-slate-100 text-black dark:bg-slate-900 dark:text-white '>
      {/* head */}
      <Nav />

      {/* body */}
      <section className='flex w-screen bg-yellow-50'>
        {/* left */}
        <NavSide />
        {/* right */}
        <section className='w-full bg-blue-500'>{children}</section>
      </section>
    </section>
  );
}
