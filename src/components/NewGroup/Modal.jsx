import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = ({ handleJoin }) => {
  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>
        <Title>개설 완료</Title>
        <SubTitle>모임방에 입장 비밀번호를 입력해보아요!</SubTitle>
        <PasswordTitle>비밀번호</PasswordTitle>
        <Password>13F4AU</Password>
        <Button onClick={handleJoin}>참여할래</Button>
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root'),
  );
};

export default Modal;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.color.grap10_80};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 32.6rem;
  background-color: ${(props) => props.theme.color.white};
  padding: 2.6rem 2.5rem;
  border-radius: 1rem;
  display: flex;
  gap: 2.2rem;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.heading1};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.font.caption2};
  color: ${({ theme }) => theme.color.gray7};
`;

const PasswordTitle = styled.p`
  ${({ theme }) => theme.font.caption1};
  color: ${({ theme }) => theme.color.gray8};
`;

const Password = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.4rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.gray10};
  ${({ theme }) => theme.font.heading2};
  background-color: ${({ theme }) => theme.color.light2};
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 5.6rem;
  padding: 1.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${(props) => props.theme.font.body1};
`;
