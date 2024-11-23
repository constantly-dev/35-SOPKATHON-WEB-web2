import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createCardApi } from '../../apis/createCardApi';

const Hint = () => {
  const [hint, setHint] = useState('');
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const createTeam = async () => {
    console.log('dddd', location.state.groupData.id);
    try {
      await createCardApi(location.state.groupData.id, hint);
      navigate(`/groups/${location.state.groupData.id}/board`);
    } catch (error) {
      alert('에러 발생! 재시도 해주세요!');
    }
  };

  const handleHint = (e) => {
    const value = e.target.value;

    if (value === '') {
      setIsActive(false);
      return;
    }

    setHint(value);
    setIsActive(value.length <= 5); // 글자 수가 5 이하면 활성화
  };

  return (
    <Wrapper>
      <Title>{location.state.groupData.name}</Title>
      <SubTitle>p.s 이 모임은 30일 뒤에 저절로 없어질 거야</SubTitle>
      <HintContainer>
        <HintTitle>내 운명 상대를 위한 힌트 한 가지</HintTitle>
        <InputContainer>
          <Label>힌트</Label>
          <Input placeholder="힌트를 입력해주세요" onChange={handleHint} />
          <HelperText>*공백포함 5글자 이내</HelperText>
        </InputContainer>
      </HintContainer>
      <Button onClick={createTeam} $isActive={isActive}>
        내 쪽지 만들기
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.heading1}
  color: ${({ theme }) => theme.color.primary};
  margin-top: 10.5rem;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.font.body6}
  margin-top: 1.5rem;
`;

const HintContainer = styled.div`
  width: 100%;
  height: 19.9rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.color.gray1 || '#FFF'};
  border: 2px solid #ffccef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.1rem 2.7rem;
  margin-top: 6.5rem;
`;

const HintTitle = styled.p`
  ${({ theme }) => theme.font.body1}
  margin-bottom: 4.2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;

const Label = styled.p`
  ${({ theme }) => theme.font.body3}
`;

const Input = styled.input`
  height: 5rem;
  border: 1px solid ${({ theme }) => theme.color.gray6};
  border-radius: 1rem;
  padding: 1.5rem 1.3rem;
`;

const HelperText = styled.p`
  ${({ theme }) => theme.font.caption3};
  color: ${({ theme }) => theme.color.gray8};

  align-self: flex-end;
`;

const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  white-space: nowrap;
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.color.primary : theme.color.gray4)};
  ${({ theme }) => theme.font.body1};
  color: #ffffff;
  border-radius: 1rem;
  margin-top: auto;
  margin-bottom: 4.4rem;

  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'not-allowed')};
`;

export default Hint;
