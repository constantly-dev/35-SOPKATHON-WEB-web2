import { Axios } from './axiosInstance';

export const checkDuplicatedApi = async (name) => {
  const userId = localStorage.getItem('id');

  const { data } = await Axios.post(
    '/api/v1/teams/check',
    { name: name },
    {
      headers: {
        'User-Id': userId,
      },
    },
  );
  return data.data.isDuplicated;
};
