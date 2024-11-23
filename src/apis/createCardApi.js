import { Axios } from './axiosInstance';

export const createCardApi = async (groupId, hint) => {
  const userId = localStorage.getItem('id');
  await Axios.post(
    '/api/v1/cards',
    { groupId, hint },
    {
      headers: {
        'User-Id': userId,
      },
    },
  );
};
