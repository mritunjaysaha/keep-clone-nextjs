import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Nav } from '@/components/Nav/Nav';
import { NavSide } from '@/components/NavSide/NavSide';
import ROUTES from '@/constants/routes.json';
import { useAppSelector } from '@/hooks/redux';
import { setAuthToken } from '@/utils/setAuthToken';

interface ILayouts {
  children: JSX.Element;
}

export function Layouts({ children }: ILayouts) {
  const router = useRouter();
  const { jwtToken } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (jwtToken) {
      setAuthToken(jwtToken);
    } else {
      router.push(ROUTES.AUTH);
    }
  }, []);

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
