import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Board from '../pages/groups/Board';
import Door from '../pages/groups/Door';
import Hint from '../pages/groups/Hint';
import Info from '../pages/groups/Info';
import NewGroup from '../pages/groups/NewGroup';
import Search from '../pages/groups/Search';
import Home from '../pages/Home/Home';
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
          { path: ':teamId/board', element: <Board /> }, // /groups/:groupId/board
          { path: ':teamId/info/:cardId', element: <Info /> }, // /groups/:groupId/info
        ],
      },
    ],
  },
]);
