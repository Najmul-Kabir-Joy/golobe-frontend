import { COLORS } from '@/constants/colors';
import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
  `,
  ButtonWithNoBg: styled.div<{ bg: 'BLACK' | 'WHITE' }>`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: ${({ bg }) => (bg === 'BLACK' ? COLORS.BLACK : COLORS.WHITE)};
  `,
  Button: styled.button<{ bg: 'BLACK' | 'WHITE' }>`
    height: 48px;
    width: 104px;
    background-color: ${({ bg }) => (bg === 'BLACK' ? COLORS.BLACK : COLORS.WHITE)};
    border-radius: 8px;
    border: none;
    color: ${({ bg }) => (bg === 'BLACK' ? COLORS.WHITE : COLORS.BLACK)};
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  `,
};

const UnAutenticatedNav = ({ bg = 'BLACK' }: { bg?: 'BLACK' | 'WHITE' }) => {
  const handleLogin = () => {};
  const handleRegistration = () => {};

  return (
    <S.Wrapper>
      <S.ButtonWithNoBg bg={bg} onClick={handleLogin}>
        Login
      </S.ButtonWithNoBg>
      <S.Button bg={bg} onClick={handleRegistration}>
        Sign up
      </S.Button>
    </S.Wrapper>
  );
};

export default UnAutenticatedNav;
