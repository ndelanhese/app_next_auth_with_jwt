/* eslint-disable dot-notation */
import React, { createContext, useEffect, useMemo, useState } from 'react';

import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

import { recoverUserInformation, signInRequest } from '../services/auth';
import {
  AuthContextProps,
  ChildrenProps,
  SignIntProps,
  UserProps,
} from './types/typesContexts';
import { api } from '../services/api';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: ChildrenProps) => {
  useEffect(() => {
    const { 'NextAuth.token': token } = parseCookies();

    if (token) {
      recoverUserInformation().then(response => setUserState(response.user));
    }
  }, []);

  const [userState, setUserState] = useState<UserProps | null>(null);
  const isAuthenticated = !!userState;

  const signIn = async ({ email, password }: SignIntProps) => {
    // aqui faria a chamada para a api

    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, 'NextAuth.token', token, {
      maxAge: 60 * 60 * 24, // 24 hours
    });

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUserState(user);
    Router.push('/dashboard');
    return false;
  };

  const logOut = async () => {
    destroyCookie(undefined, 'NextAuth.token');
    Router.push('/');
    return false;
  };

  const memorizeData = useMemo(
    () => ({ userState, isAuthenticated, signIn, logOut }),
    [isAuthenticated, userState],
  );

  return (
    <AuthContext.Provider value={memorizeData}>{children}</AuthContext.Provider>
  );
};
