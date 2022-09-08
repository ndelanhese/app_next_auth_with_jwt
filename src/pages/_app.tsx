// eslint-disable-next-line import/order
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { AuthProvider } from '../contexts/AuthContexts';
import { theme } from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </AuthProvider>
);

export default MyApp;
