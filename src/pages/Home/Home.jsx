import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SvgLogo from '../../assets/svg/Logo';

const Home = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // 전화번호 유효성 검사
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(\+82|0)(10|11|16|17|18|19)-?\d{3,4}-?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsNumberValid(validatePhoneNumber(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length === 6);
  };

  const login = async () => {
    const response = await axios.post('https://www.jaeyun.o-r.kr/api/v1/signin', { phoneNumber, password });

    if (response.data.code === 200) {
      console.log(response.data.id);
      localStorage.setItem('id', response.data.data.id);
      navigate('/door');
    }
  };

  return (
    <Wrapper>
      <Logo />

      <Main>
        <PhoneNumber>
          <Text>전화번호</Text>
          <InputNumber
            type="text"
            name="phoneNumber"
            placeholder="010-0000-0000"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            hasValue={phoneNumber.trim() !== ''}
            isValid={isNumberValid}
          />
        </PhoneNumber>

        <Password>
          <Text>비밀번호</Text>
          <InputPassword
            type="password"
            name="password"
            placeholder="비밀번호 6자리를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
            hasValue={password.trim() !== ''}
            isValid={isPasswordValid}
          />
        </Password>
      </Main>

      <SubmitButton type="submit" onClick={login} disabled={!isNumberValid || !isPasswordValid}>
        번호 따러 갈래?
      </SubmitButton>
    </Wrapper>
  );
};

export default Home;

export const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
`;

export const Logo = styled(SvgLogo)`
  width: 19rem;
  height: 17.4rem;
  margin-top: 9.5rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
`;

export const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.8rem;
  gap: 0.8rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.gray8};
  ${({ theme }) => theme.font.body3};
`;

export const InputNumber = styled.input`
  height: 5rem;
  padding: 1.5rem 1.3rem;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme, isValid }) => (isValid ? theme.color.primary : theme.color.gray6)};
  ${({ theme }) => theme.font.body2};

  &::placeholder {
    ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray4};
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const InputPassword = styled.input`
  height: 5rem;
  padding: 1.5rem 1.3rem;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme, isValid }) => (isValid ? theme.color.primary : theme.color.gray6)};
  ${({ theme }) => theme.font.body2};

  &::placeholder {
    ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray4};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 5.6rem;
  margin-top: 6.3rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.body1};

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray4};
    color: ${({ theme }) => theme.color.gray9};
  }
  margin-top: auto;
  margin-bottom: 4.4rem;
`;
