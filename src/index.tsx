import { ThemeProvider, Typography, useTheme } from '@mui/material';
import theme from '@shared/ui/theme';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const theme = useTheme();

  return (
    <Typography color={theme.colors.aminoAcid.cysteine} variant="body1">
      My React and TypeScript App!
    </Typography>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
}
