import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkDuplicatedApi } from '../../apis/checkDupicatedApi';
import { createTeamApi } from '../../apis/createTeamApi';
import Modal from '../../components/NewGroup/Modal';

const NewGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [num, setNum] = useState('');
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupData, setGroupData] = useState({});
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const isDuplicated = await checkDuplicatedApi(groupName);
      if (isDuplicated) {
        alert('중복된 이름입니다.');
        return;
      }
      const data = await createTeamApi(groupName, num);
      setGroupData(data);
      console.log('dd', data);

      setIsModalOpen(true); // 버튼 클릭 시 모달 열기
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    setGroupName(value);

    if (value.length > 5 || value.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChangeNum = (e) => {
    const value = e.target.value;
    setNum(value);

    if (value.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleJoin = () => {
    // 뭔가 더~~~~
    setIsModalOpen(false); // 모달 닫기
    navigate('/groups/hint', {
      state: {
        groupData,
      },
    });
  };

  const isButtonDisabled = error || groupName.trim() === '' || num.trim() === '';

  return (
    <Wrapper>
      <Title>모임을 개설해줘</Title>
      <SubTitle>p.s 이 모임은 30일 뒤에 저절로 없어질 예정이야</SubTitle>
      <InputLayout>
        <InputContainer>
          <Label>모임명</Label>
          <Input placeholder="모임명을 입력해주세요" onChange={handleChangeName} isInvalid={error} />
          {error && <ErrorText>모임명은 5글자 이내여야 합니다.</ErrorText>}
          {!error && <HelperText>*공백포함 5글자 이내</HelperText>}
        </InputContainer>

        <InputContainer>
          <Label>최소 인원 수</Label>
          <Input placeholder="최소 인원 수를 입력해주세요" onChange={handleChangeNum} />
        </InputContainer>
      </InputLayout>
      <Button isInvalid={isButtonDisabled} onClick={handleButtonClick} disabled={isButtonDisabled}>
        이대로 개설할래
      </Button>
      {isModalOpen && <Modal handleJoin={handleJoin} />}
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
  margin-top: 10.5rem;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.font.body6}
  margin-top: 1.5rem;
`;
const InputLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8.2rem;
  gap: 2.8rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Label = styled.p`
  ${({ theme }) => theme.font.body3}
`;

const Input = styled.input`
  height: 5rem;
  border: 1px solid ${({ isInvalid, theme }) => (isInvalid ? theme.color.error_red : theme.color.gray6)};
  border-radius: 1rem;
  padding: 1.5rem 1.3rem;

  &:focus {
    outline: none;
  }
`;

const ErrorText = styled.p`
  ${({ theme }) => theme.font.caption3};
  color: ${({ theme }) => theme.color.error_red};
  align-self: flex-start;
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
  background-color: ${({ isInvalid, theme }) => (isInvalid ? theme.color.gray4 : theme.color.primary)};
  cursor: ${({ isInvalid }) => (isInvalid ? 'not-allowed' : 'pointer')};
  ${({ theme }) => theme.font.body1};
  color: #ffffff;

  border-radius: 1rem;
  margin-top: auto;
  margin-bottom: 4.4rem;
`;

export default NewGroup;
