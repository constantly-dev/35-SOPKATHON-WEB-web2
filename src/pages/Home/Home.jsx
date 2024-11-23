import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return <HomeLayout>우리팀 화이팅~</HomeLayout>;
};

export default Home;

export const HomeLayout = styled.div`
  ${({ theme }) => theme.font.heading1_bold_20}
`;
