import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      aminoAcid: {
        cysteine: string;
      };
    };
  }
  interface ThemeOptions {
    colors?: {
      aminoAcid?: {
        cysteine?: string;
      };
    };
  }
}

const theme = createTheme({
  colors: {
    aminoAcid: {
      cysteine: '#ffea00',
    },
  },
});

export default theme;
