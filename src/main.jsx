import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/global.js';
import { router } from './routes/Router.jsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
);
