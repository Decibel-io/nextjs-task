/* eslint-disable react-hooks/exhaustive-deps */

import { useLogin } from '@/api/useLogin';
import { useRefreshToken } from '@/api/useRefreshToken';
import { AUTH_CREDENTIALS } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { alertAnError, getMilliseconds } from '@/utils';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import { AuthContextContainer } from './AuthContext';

const tenMinutes = getMilliseconds();

function AuthProvider({ children }: PropsWithChildren) {
  const { mutate: Login } = useLogin();
  const { mutate: refreshToken } = useRefreshToken();
  const [counter, setCounter] = useState(0);

  const { setItem, item } = useLocalStorage('AUTH_TOKEN');

  const handleLogin = () => {
    if (!item) {
      Login(AUTH_CREDENTIALS, {
        onSuccess: (data) => {
          setCounter((prev) => prev + 1);
          if (setItem && !!data) {
            console.log('login successful');

            setItem(data.access_token);
          }
        },
        onError: (err) => alertAnError(err),
      });
    }
  };

  useEffect(() => {
    handleLogin();
  }, [Login, counter]);

  useEffect(() => {
    setInterval(() => {
      refreshToken(
        {},
        {
          onSuccess: (data) => {
            setCounter((prev) => prev + 1);
            if (setItem && !!data) setItem(data.access_token);
          },
          onError: (err) => {
            setCounter((prev) => prev + 1);
            alertAnError(err);
          },
        }
      );
    }, tenMinutes);
  }, [item, counter]);

  return <AuthContextContainer value={{}}>{children}</AuthContextContainer>;
}

export default AuthProvider;
