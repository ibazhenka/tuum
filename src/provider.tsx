import { ThemeProvider } from '@mui/material/styles';
import React, { ReactNode } from 'react';
import { theme } from './theme';

interface ProviderProps {
  children: ReactNode;
}

export function DesignSystemProvider({ children }: ProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
