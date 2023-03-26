import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { useAppDispatch } from '@/hooks/redux';
import { setAuth, setUserData } from '@/redux/slices/userSclice';
import { login } from '@/request/httpCalls/auth/login';
import { setAuthToken } from '@/utils/setAuthToken';

const Auth = () => {
  const dispatch = useAppDispatch();

  const { data, isError } = useQuery('login', login);

  useEffect(() => {
    if (!isError && data) {
      window.localStorage.setItem('jwtToken', data.token);
      setAuthToken(data.token);
      dispatch(setAuth({ id: data.user.id }));
      dispatch(setUserData(data.user));
    }
  }, [data]);

  return (
    <section>
      <p>Auth</p>
    </section>
  );
};

export default Auth;
