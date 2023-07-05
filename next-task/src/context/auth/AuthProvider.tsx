/* eslint-disable react-hooks/exhaustive-deps */

import { useLogin } from '@/api/useLogin';
import { useRefreshToken } from '@/api/useRefreshToken';
import { AUTH_CREDENTIALS } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getMilliseconds } from '@/utils';
import React, { PropsWithChildren, useEffect } from 'react';
import { AuthContextContainer } from './AuthContext';

const tenMinutes = getMilliseconds();

function AuthProvider({ children }: PropsWithChildren) {
  const { mutate: Login } = useLogin();
  const { mutate: refreshToken } = useRefreshToken();
  const { setItem, item } = useLocalStorage('AUTH_TOKEN');

  const handleAuth = () => {
    if (!item) {
      Login(AUTH_CREDENTIALS, {
        onSuccess: (data) => {
          if (setItem && !!data) setItem(data.access_token!);
        },
        onError: () => alert('Login Error'),
      });
    }
    setInterval(() => {
      refreshToken(
        {},
        {
          onSuccess: (data) => {
            if (setItem && !!data) setItem(data.access_token!);
          },
          onError: () => alert('Refresh Token Error'),
        }
      );
    }, tenMinutes);
  };

  useEffect(() => handleAuth(), [Login, refreshToken]);

  return <AuthContextContainer value={{}}>{children}</AuthContextContainer>;
}

export default AuthProvider;
