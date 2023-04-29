import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Nav } from '@/components/Nav/Nav';
import { NavSide } from '@/components/NavSide/NavSide';
import { TakeANote } from '@/components/TakeANote';
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
    <section className='h-screen w-screen overflow-hidden bg-light text-black dark:bg-dark dark:text-white'>
      {/* head */}
      <Nav />

      {/* body */}
      <section className='flex h-90v w-screen bg-light dark:bg-dark'>
        {/* left */}
        <NavSide />
        {/* right */}
        <section className='w-full'>
          <TakeANote />
          {children}
        </section>
      </section>
    </section>
  );
}
