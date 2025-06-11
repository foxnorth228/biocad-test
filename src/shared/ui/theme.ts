import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      aminoAcid: {
        cysteine: string;
        hydrophobic: string;
        glycine: string;
        negativelyCharged: string;
        positivelyCharged: string;
        polarUncharged: string;
      };
    };
    sizes: {
      comparator: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
  interface ThemeOptions {
    colors?: {
      aminoAcid?: {
        cysteine: string;
        hydrophobic: string;
        glycine: string;
        negativelyCharged: string;
        positivelyCharged: string;
        polarUncharged: string;
      };
    };
    sizes?: {
      comparator?: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
}

const theme = createTheme({
  colors: {
    aminoAcid: {
      cysteine: '#ffea00',
      hydrophobic: '#67e4a6',
      glycine: '#c4c4c4',
      negativelyCharged: '#fc9cac',
      positivelyCharged: '#bb99ff',
      polarUncharged: '#80bfff',
    },
  },
  sizes: {
    comparator: {
      fontSize: '2rem',
      lineHeight: '2rem',
    },
  },
});

export default theme;
