import React from 'react';
import styled from 'styled-components';
const Button = ({ content, selected, onClick }) => {
  return (
    <Buttons selected={selected} onClick={onClick}>
      {content}
    </Buttons>
  );
};

export default Button;

const Buttons = styled.button`
  display: flex;
  width: 100%;
  height: 5.6rem;
  padding: 1.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: ${({ selected, theme }) => (selected ? theme.color.primary : theme.color.gray4)};
  color: ${({ selected, theme }) => (selected ? theme.color.white : theme.color.gray9)};
  ${(props) => props.theme.font.body1};
`;
