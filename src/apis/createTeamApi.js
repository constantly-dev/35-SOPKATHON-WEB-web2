import { Axios } from './axiosInstance';

export const createTeamApi = async (name, minimumStartNumber) => {
  const userId = localStorage.getItem('id');
  const { data } = await Axios.post(
    '/api/v1/teams',
    { name: name, minimumStartNumber: minimumStartNumber },
    {
      headers: {
        'User-Id': userId,
      },
    },
  );
  return data.data;
};
