import { Axios } from './axiosInstance';

// 모임 검색 API 요청 함수
export const searchGroups = async (searchTerm) => {
  try {
    const response = await Axios.get(`/api/v1/teams?name=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    throw error;
  }
};

// 모임 참여 요청 함수
export const registerGroups = async (groupId, code) => {
  const userId = localStorage.getItem('id');

  try {
    const response = await Axios.post(
      `/api/v1/teams/${groupId}/register`,
      { code },
      {
        headers: {
          'User-Id': userId, // userId를 헤더에 추가
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    throw error;
  }
};
