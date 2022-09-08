import { useContext, useEffect } from 'react';

import { AuthContext } from '../../contexts/AuthContexts';
import { NavBar } from '../NavBar/NavBar';
import { api } from '../../services/api';

export const Dashboard = () => {
  const { userState, logOut } = useContext(AuthContext);

  useEffect(() => {
    api.get('/user');
  });

  return <NavBar avatar_url={userState?.avatar_url} logOut={logOut} />;
};
