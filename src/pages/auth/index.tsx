import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import ROUTES from '@/constants/routes.json';
import { useAppDispatch } from '@/hooks/redux';
import { setAuth, setUserData } from '@/redux/slices/userSclice';
import { login } from '@/request/httpCalls/auth/login';
import { setAuthToken } from '@/utils/setAuthToken';

const Auth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { data, isError } = useQuery('login', login);

  useEffect(() => {
    if (!isError && data) {
      setAuthToken(data.token);
      dispatch(setAuth(data.token));
      dispatch(setUserData(data.user));
      router.push(ROUTES.HOME);
    }
  }, [data]);

  return (
    <section>
      <p>Auth</p>
    </section>
  );
};

export default Auth;
