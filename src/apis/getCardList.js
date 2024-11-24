import { isAxiosError } from 'axios';
import { Axios } from './axiosInstance';

const getCardList = async (teamId) => {
  const userId = localStorage.getItem('id');

  try {
    const response = await Axios.get(`/api/v1/cards?teamId=${teamId}`, {
      headers: {
        'User-Id': userId, // userId를 헤더에 추가
      },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error('api 연결에 실패했습니다.');
    } else {
      throw new Error('네트워크 에러입니다.');
    }
  }
};

export default getCardList;
