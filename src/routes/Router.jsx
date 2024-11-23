import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // 아울렛
    children: [{ index: true, element: <Home /> }],
  },
]);
