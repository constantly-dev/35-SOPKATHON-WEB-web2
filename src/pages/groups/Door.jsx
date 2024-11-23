import React from 'react';
import styled from 'styled-components';
import { BtnEnterCreate, BtnEnterRoom } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

const Door = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Up>
        <UpTitle>
          너도 <span>번따</span> 할래?
        </UpTitle>
        <UpDetail>
          우리 모임의 사람들 중<br />
          랜덤으로 매칭 받고 친해지자!
        </UpDetail>
      </Up>

      <SelectBtn>
        <CreateRoomBtn onClick={() => navigate('/groups/new')} />
        <EnterRoomBtn onClick={() => navigate('/groups/search')} />
      </SelectBtn>

      <Down>
        네가 관심 있던
        <br /> <span>그 사람</span>과 매칭 될지도 몰라!
      </Down>
    </Wrapper>
  );
};

export default Door;

const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 9rem 2.4rem 0 2.4rem;

  background-color: ${({ theme }) => theme.color.primary_light1};
`;

const Up = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const UpTitle = styled.p`
  ${({ theme }) => theme.font.heading1};

  & span {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const UpDetail = styled.p`
  ${({ theme }) => theme.font.heading5};
`;

const SelectBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  gap: 2.2rem;
`;

const CreateRoomBtn = styled(BtnEnterCreate)`
  width: 15.2rem;
  height: 20rem;
`;

const EnterRoomBtn = styled(BtnEnterRoom)`
  width: 15.2rem;
  height: 20rem;
`;

const Down = styled.p`
  margin-top: 9.1rem;
  ${({ theme }) => theme.font.heading5};
  text-align: right;

  & span {
    color: ${({ theme }) => theme.color.primary};
  }
`;
