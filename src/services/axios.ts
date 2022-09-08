import { parseCookies } from 'nookies';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAPIClient = (ctx?: any) => {
  const { 'NextAuth.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });

  api.interceptors.request.use(config => config);

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return api;
};
