import { isAxiosError } from 'axios';
import { Axios } from './axiosInstance';

const getCardData = async (cardId, teamId) => {
  try {
    const response = await Axios.get(`/api/v1/cards/${cardId}?teamId=${teamId}`, {
      headers: {
        'User-Id': 1, // userId를 헤더에 추가
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

export default getCardData;
