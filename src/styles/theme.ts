import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
        fontSize: 'md',
        fontWeight: 'bold',
        WebkitFontSmoothing: 'antialiased',
      },
    },
  },

  fonts: {
    heading: `'Roboto', 'sans-serif'`,
    body: `"Roboto", 'sans-serif'`,
  },
});
