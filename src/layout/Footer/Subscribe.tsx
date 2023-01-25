import Newsletter from '@/assets/Newsletter';
import { COLORS } from '@/constants/colors';
import React from 'react';
import styled from 'styled-components';

const S = {
  SubscribeContainer: styled.div`
    width: 1440px;
    height: 305px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${COLORS.MINT_LIGHT};
    border-radius: 20px;
    padding: 24px;
    z-index: 3;
  `,
  SubscribeTitle: styled.div`
    h2 {
      font-size: 44px;
      color: ${COLORS.BLACKISH_GREEN};
      font-weight: 700;
      text-transform: capitalize;
    }
  `,
  TheTravel: styled.div`
    margin-top: 24px;
    h5 {
      font-size: 20px;
      font-weight: 700;
      color: ${COLORS.BLACKISH_GREEN};
    }
    p {
      font-size: 16px;
      font-weight: 500;
      color: ${COLORS.BLACKISH_GREEN};
      opacity: 0.7;
      margin-top: 12px;
    }
  `,
  SubscribeInput: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 16px;
    input {
      width: 473px;
      outline: 0;
      border: 0;
      border-radius: 4px;
      color: #1c1b1f;
      font-size: 16px;
      padding: 14px;
    }
    button {
      outline: 0;
      border: 0;
      border-radius: 4px;
      background-color: ${COLORS.BLACKISH_GREEN};
      color: white;
      font-size: 14px;
      font-weight: 600;
      text-transform: capitalize;
      padding: 14px;
      margin-left: 8px;
      cursor: pointer;
    }
  `,
  NewsLetter: styled.div`
    position: absolute;
    bottom: -4px;
    right: 24px;
  `,
};
const Subscribe = () => {
  return (
    <S.SubscribeContainer>
      <S.SubscribeTitle>
        <h2>subscribe</h2>
        <h2>newsletter</h2>
      </S.SubscribeTitle>
      <S.TheTravel>
        <h5>The Travel</h5>
        <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
      </S.TheTravel>
      <S.SubscribeInput>
        <input type="email" placeholder="Your email address" />
        <button type="submit">subscribe</button>
      </S.SubscribeInput>
      <S.NewsLetter>
        <Newsletter />
      </S.NewsLetter>
    </S.SubscribeContainer>
  );
};

export default Subscribe;
