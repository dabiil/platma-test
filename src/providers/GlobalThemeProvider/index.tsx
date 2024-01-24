import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { mainTheme } from './themes';

export const GlobalThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
