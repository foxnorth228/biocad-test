import { ThemeProvider } from '@mui/material';
import theme from '@shared/ui/theme';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app';

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
