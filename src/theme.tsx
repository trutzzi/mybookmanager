import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { COLORS } from './constants/color';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
      light: COLORS.WHITE,
      dark: COLORS.BLACK,
      contrastText: '#fff',
    },
    secondary: purple,
  },
});

export default function UsingColorBrands({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}