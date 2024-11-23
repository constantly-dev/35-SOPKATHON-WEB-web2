import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../Layout';
import Info from '../pages/groups/Info';
import Search from '../pages/groups/Search';
import Board from '../pages/groups/Board';
import NewGroup from '../pages/groups/NewGroup';
import Hint from '../pages/groups/Hint';
import Door from '../pages/groups/Door';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'door', element: <Door /> },
      {
        path: 'groups',
        children: [
          { path: 'new', element: <NewGroup /> }, // /groups/new
          { path: 'hint', element: <Hint /> }, // /groups/hint
          { path: 'search', element: <Search /> }, // /groups/search
          { path: ':groupId/board', element: <Board /> }, // /groups/:groupId/board
          { path: ':groupId/info', element: <Info /> }, // /groups/:groupId/info
        ],
      },
    ],
  },
]);
