import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/global.js';
import { router } from './routes/Router.jsx';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
