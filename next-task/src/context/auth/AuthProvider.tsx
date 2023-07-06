/* eslint-disable react-hooks/exhaustive-deps */

import Api from '@/api/Api';
import { useLogin } from '@/api/useLogin';
import { useRefreshToken } from '@/api/useRefreshToken';
import { AUTH_CREDENTIALS } from '@/constants';
import { useInterval } from '@/hooks/useInterval';
import { alertAnError, getMilliseconds } from '@/utils';

import React, { PropsWithChildren, useEffect } from 'react';
import { AuthContextContainer } from './AuthContext';

const tenMinutes = getMilliseconds();

interface IAuth extends PropsWithChildren {
  setToken: (token: string) => void;
  token: string;
}

function AuthProvider({ children, setToken, token }: IAuth) {
  const { mutate: Login } = useLogin();
  const { mutate: refreshToken } = useRefreshToken();

  const handleLogin = () => {
    if (!token.length) {
      Login(AUTH_CREDENTIALS, {
        onSuccess: (data) => {
          if (!!data) {
            setToken(data.access_token);
          }
        },
        onError: (err) => alertAnError(err),
      });
    }
  };

  useEffect(() => {
    handleLogin();
  }, [Login, token]);

  useInterval(() => {
    refreshToken(
      {},
      {
        onSuccess: (data) => {
          if (!!data) {
            setToken(data.access_token);
          }
        },
        onError: (err) => {
          alertAnError(err);
        },
      }
    );
  }, tenMinutes);

  return (
    <AuthContextContainer value={{ token }}>{children}</AuthContextContainer>
  );
}

export default AuthProvider;
