import { useRouter } from 'next/router';
import type { MouseEventHandler } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import ROUTES from '@/constants/routes.json';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setNavSideClose } from '@/redux/slices/globalSlice';
import { setLabels } from '@/redux/slices/userSlice';
import { getAllLabelsByUserId } from '@/request/httpCalls/labels/getAllLabelsByUserId';

type NavSideReturn = {
  isNavSideClose: boolean;
  isMenuClicked: boolean;
  handleMouseEnter: MouseEventHandler<HTMLElement>;
  handleMouseLeave: MouseEventHandler<HTMLElement>;
  handleButtonNavClick: Function;
  checkIsCurrentPage: Function;
};

export function useNavSide(): NavSideReturn {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { isNavSideClose, isMenuClicked } = useAppSelector(
    (state) => state.global,
  );

  const { email } = useAppSelector((state) => state.user);

  const { data, isFetched } = useQuery(['getAllLabels', email], () => {
    return getAllLabelsByUserId(email);
  });

  useEffect(() => {
    if (isFetched) {
      console.log('[NavSide]', { data });

      if (data?.success) {
        dispatch(setLabels(data.labels));
      }
    }
  }, [isFetched]);

  function handleMouseEnter() {
    dispatch(setNavSideClose(false));
  }

  function handleMouseLeave() {
    if (!isMenuClicked) {
      dispatch(setNavSideClose(true));
    }
  }

  function handleButtonNavClick(page: string) {
    router.push(page);
  }

  function checkIsCurrentPage(page: string): boolean {
    if (router.pathname.includes(ROUTES.LABELS)) {
      // @ts-ignore
      return page.includes(router.query.slug);
    }

    return router.pathname.includes(page);
  }

  return {
    isNavSideClose,
    isMenuClicked,
    handleMouseEnter,
    handleMouseLeave,
    handleButtonNavClick,
    checkIsCurrentPage,
  };
}
