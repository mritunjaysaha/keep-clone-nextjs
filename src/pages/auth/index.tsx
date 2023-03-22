import axios from 'axios';

import { useAppDispatch } from '@/hooks/redux';
import { setAuth, setUserData } from '@/redux/slices/userSclice';
import { setAuthToken } from '@/utils/setAuthToken';

const Auth = () => {
  const dispatch = useAppDispatch();

  async function logIn() {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
        email: 'admin@test.com',
        password: '123456',
      })
      .then((res) => {
        const { data } = res;
        console.log({ data });
        // window.localStorage.setItem('jwtToken', data.token);
        setAuthToken(data.token);
        dispatch(setAuth({ id: data.user.id }));
        dispatch(setUserData(data.user));
      });
  }

  logIn();

  return (
    <section>
      <p>Auth</p>
    </section>
  );
};

export default Auth;
