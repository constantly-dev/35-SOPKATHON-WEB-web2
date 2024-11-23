import React, { useState } from 'react';
import styled from 'styled-components';

const GroupList = ({ onGroupClick, clickedId, groups }) => {
  console.log(groups);

  return (
    <>
      {groups.map((group) => (
        <GroupContainer key={group.id} onClick={() => onGroupClick(group.id)} isActive={group.id === clickedId}>
          <GroupTitle>{group.name}</GroupTitle>
        </GroupContainer>
      ))}
    </>
  );
};

const GroupContainer = styled.div`
  cursor: pointer;
  height: 6rem;
  padding: 2rem 1.3rem;
  border-radius: 1rem;
  background-color: ${({ isActive, theme }) => (isActive ? theme.color.light2 : theme.color.gray2)};
  border: 1px solid ${({ isActive, theme }) => (isActive ? theme.color.primary : theme.color.gray2)};
`;

const GroupTitle = styled.p`
  ${(props) => props.theme.font.body2};
`;

export default GroupList;
