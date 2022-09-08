import { v4 as uuid } from 'uuid';

import { SignInRequestProps } from './types/ServicesTypes';

const delay = (amount = 750) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise(resolve => setTimeout(resolve, amount));

export const signInRequest = async (data: SignInRequestProps) => {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'Nathan Delanhese',
      email: 'nathan.delanhese@gmail.com',
      avatar_url: 'https://github.com/ndelanhese.png',
      data,
    },
  };
};

export const recoverUserInformation = async () => {
  await delay();
  return {
    user: {
      name: 'Nathan Delanhese',
      email: 'nathan.delanhese@gmail.com',
      avatar_url: 'https://github.com/ndelanhese.png',
    },
  };
};
