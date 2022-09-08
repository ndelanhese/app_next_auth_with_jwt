import { useContext, useEffect } from 'react';

import { GetServerSideProps } from 'next';

import { parseCookies } from 'nookies';

import { AuthContext } from '../../contexts/AuthContexts';
import { NavBar } from '../NavBar/NavBar';
import { getAPIClient } from '../../services/axios';
import { api } from '../../services/api';

export const Dashboard = () => {
  const { userState, logOut } = useContext(AuthContext);

  useEffect(() => {
    api.get('/user');
  });

  return <NavBar avatar_url={userState?.avatar_url} logOut={logOut} />;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const apiClient = getAPIClient(ctx);
  const { 'NextAuth.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  await apiClient.get('/user');
  return {
    props: {},
  };
};
