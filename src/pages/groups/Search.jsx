import React from 'react';
import styled from 'styled-components';
import TextFiled from '../../components/Search/TextFiled';
import Button from '../../components/Search/Button';
import { useState } from 'react';
import GroupList from '../../components/Search/GroupList';
import Modal from '../../components/Search/Modal';
const Search = () => {
  const [clickedGroupId, setClickedGroupId] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);

  const handleGroupClick = (groupId) => {
    setClickedGroupId((prevId) => (prevId === groupId ? undefined : groupId));
  };

  const handleButtonClick = () => {
    if (clickedGroupId !== undefined) {
      setIsModalOpen(true); // 버튼 클릭 시 모달 열기
      console.log(isModalOpen);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <SearchContainer>
      <TitleWrapper>
        <Title>네가 찾고 있는 모임의 이름을 알려줘</Title>
      </TitleWrapper>
      <TextFiledWrapper>
        <TextFiled onSearch={(data) => setGroups(data)} />
      </TextFiledWrapper>
      <GroupWrapper>
        <GroupList groups={groups} onGroupClick={handleGroupClick} clickedId={clickedGroupId} />
      </GroupWrapper>
      <ButtonWrapper>
        <Button content={'바로 이거야'} selected={clickedGroupId !== undefined} onClick={handleButtonClick} />
      </ButtonWrapper>

      {isModalOpen && <Modal closeModal={closeModal} groupId={clickedGroupId} />}
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 14.7rem 2.4rem 7.6rem 2.4rem;
`;

const TitleWrapper = styled.div`
  width: 22rem;
  height: 7.2rem;
  margin-bottom: 7.4rem;
`;

const Title = styled.h1`
  ${(props) => props.theme.font.heading1};
`;

const TextFiledWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const GroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 12.4rem;
  background-color: ${(props) => props.theme.white};
`;
