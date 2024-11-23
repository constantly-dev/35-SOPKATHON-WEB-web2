import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { SearchGray } from '../../assets/svg';
import { SearchPink } from '../../assets/svg';
import { searchGroups } from '../../apis/searchApi';
const TextFiled = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = async () => {
    if (!inputValue.trim()) return; // 빈 값일 경우 API 호출 안 함

    try {
      const data = await searchGroups(inputValue); // searchTeams 호출
      console.log(data); // 받은 데이터 처리
      onSearch(data.data.teams);
    } catch (error) {
      console.error('검색 중 오류 발생:', error);
    }
  };

  return (
    <InputContainer>
      <Label htmlFor="search">모임명</Label>
      <InputWrapper>
        <Input
          id="search"
          type="text"
          name="search"
          value={inputValue}
          onChange={handleInputChange}
          selected={inputValue.trim() !== ''}
          placeholder="모임 이름을 검색해보세요"
        />
        {!inputValue.trim() ? (
          <SvgContainer onClick={handleSearchClick} disabled={!inputValue.trim()}>
            <SearchGray width="2.4rem" />
          </SvgContainer>
        ) : (
          <SvgContainer onClick={handleSearchClick}>
            <SearchPink width="2.4rem" />
          </SvgContainer>
        )}
      </InputWrapper>
    </InputContainer>
  );
};

export default TextFiled;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Label = styled.label`
  ${(props) => props.theme.font.body3};
  color: ${(props) => props.theme.gray8};
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 1.5rem 1.3rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.color.gray6};

  &::placeholder {
    ${(props) => props.theme.font.body2};
    color: ${(props) => props.theme.gray4};
  }
`;

const SvgContainer = styled.div`
  position: absolute;
  right: 1.3rem;
  top: 50%;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transform: translateY(-50%);
`;
