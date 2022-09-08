import { GetServerSideProps } from 'next';

import { parseCookies } from 'nookies';

import { Dashboard } from '../../features/Dashboard/Dashboard';
import { getAPIClient } from '../../services/axios';

const MyDashboard = () => <Dashboard />;

export default MyDashboard;

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
