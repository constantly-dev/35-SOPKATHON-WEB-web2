import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SvgBtnLetterCloseHintNoText from '../../assets/svg/BtnLetterCloseHintNoText';
import SvgBtnLetterOpenHintNoText from '../../assets/svg/BtnLetterOpenHintNoText';

const BoardCard = ({ children, isAbleClick, selectData, cardId, teamId }) => {
  const isCardOpne = cardId === selectData[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickCard = () => {
    if (selectData.length > 1) {
      alert('미안 쪽지는 하나만 열 수 있어 ~');
    } else {
      // isAbleClick 가 true면
      if (isAbleClick) {
        setIsModalOpen(true);
      } else {
        // false면 toast 나와야 해!
        alert('쪽지가 더 모여야 해!');
      }
    }
  };

  const handleClickModalButton = () => {
    // navigate(`/groups/${groupId}/info/${cardId}`);
    navigate(`/groups/${teamId}/info/${cardId}`);
    // navigate('/groups/1/info/1');
  };

  return (
    <BoardLayout>
      {isCardOpne ? (
        <CardLayout onClick={handleClickCard}>
          <SvgBtnLetterOpenHintNoText />
          <SelectedCard>
            <SelectedCardText>{children}</SelectedCardText>
            <SelectedCardText>{selectData[2]}</SelectedCardText>
            <SelectedCardText>{selectData[3]}</SelectedCardText>
          </SelectedCard>
        </CardLayout>
      ) : (
        <CardLayout onClick={handleClickCard}>
          <SvgBtnLetterCloseHintNoText />
          <CardText>{children}</CardText>
        </CardLayout>
      )}

      {isModalOpen && (
        <ModalLayout>
          <ModalTitle>이 사람의 번호가 궁금해?</ModalTitle>
          <ModalConentWrapper>
            <ModalText>이 사람에 대한 힌트는 ...</ModalText>
            <ModalContent>{children}</ModalContent>
          </ModalConentWrapper>
          <ModalButton onClick={handleClickModalButton}>열어보기</ModalButton>
        </ModalLayout>
      )}
    </BoardLayout>
  );
};

export default BoardCard;

const BoardLayout = styled.div`
  position: relative;
  display: flex;
`;

const CardLayout = styled.div`
  width: 16rem;
  height: 10rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
`;

const SelectedCardText = styled.span`
  color: ${({ theme }) => theme.color.gray10};
  ${({ theme }) => theme.font.body4}
`;

const CardText = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.color.gray10};
  ${({ theme }) => theme.font.heading3}
`;

const ModalLayout = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 25.2rem;
  border-radius: 10px;

  padding: 2.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: calc(100dvw - 5.2rem);

  position: fixed;
  top: calc(50dvh - 12.6rem);
  left: 2.4rem;
  right: 2.4rem;
  z-index: 5;
`;

const ModalTitle = styled.h2`
  ${({ theme }) => theme.font.heading1};
`;

const ModalConentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const ModalText = styled.span`
  ${({ theme }) => theme.font.caption1};
  color: ${({ theme }) => theme.color.gray8};
`;

const ModalContent = styled.div`
  ${({ theme }) => theme.font.heading2};
  background-color: ${({ theme }) => theme.color.primary_light2};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.9rem;
  border-radius: 10px;
  width: 100%;
`;

const ModalButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  height: 5.4rem;
  border-radius: 10px;
  width: 100%;
`;
