import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardCard from '../../components/board/BoardCard';
import getCardList from '../../apis/getCardList';
import { useParams } from 'react-router-dom';

const Board = () => {
  const { teamId } = useParams();
  const [data, setData] = useState();
  const [renderData, setRenderData] = useState([]);
  const [isAbleClick, setIsAbleClick] = useState(false);
  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    const fetchCardList = async () => {
      try {
        const groupListData = await getCardList(teamId);
        setData(groupListData);
      } catch (error) {
        console.log('에러:', error);
      }
    };

    fetchCardList();
  }, [teamId]);

  useEffect(() => {
    if (!data) return; // data가 없으면 실행하지 않음

    if (data.myCard) {
      // 최소모임인원이 넘었을 때
      setSelectData(Object.values(data.myCard)); // 1번 열어봤을 때
      const newRenderData = [{ id: data.myCard.id, hint: data.myCard.hint }, ...data.cards];
      setRenderData(newRenderData);
      setIsAbleClick(true);
    } else {
      // 1번 열어보지 않았을 때
      const newRenderData = [...data.data.hiddenList];
      setRenderData(newRenderData);

      if (data.data.isAbleToChoose) {
        setIsAbleClick(true); // 최소모임인원이 충족
      } else {
        setIsAbleClick(false); // 최소모임인원 충족x
      }
    }
  }, [data]);

  return (
    <>
      <BoardLayout>
        <BoardHeader>
          <BoardHeaderTitle>모임명</BoardHeaderTitle>
          <BoardHeaderText>p.s 우연을 운명으로 만들어볼래 ?</BoardHeaderText>
        </BoardHeader>

        <BoardList>
          {renderData.map((data) => {
            return (
              <BoardCard
                key={data.id}
                cardId={data.id}
                isAbleClick={isAbleClick}
                selectData={selectData}
                teamId={teamId}>
                {data.hint}
              </BoardCard>
            );
          })}
        </BoardList>
      </BoardLayout>
    </>
  );
};

export default Board;

const BoardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary_light2};

  padding: 6.5rem 2.4rem;
`;

const BoardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const BoardHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.font.heading1}
`;

const BoardHeaderText = styled.span`
  color: ${({ theme }) => theme.color.gray9};
  ${({ theme }) => theme.font.body6}
`;

const BoardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;
