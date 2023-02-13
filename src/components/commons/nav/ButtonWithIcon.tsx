import React from 'react';
import Icon from '@mui/material/Icon';
import { COLORS } from '@/constants/colors';
import styled from 'styled-components';
const S = {
  Wrapper: styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 4px;
  `,
  Text: styled.p<{ fontColor: 'BLACK' | 'WHITE'; fontSize: number }>`
    font-size: ${({ fontSize }) => `${fontSize}px`};
    font-weight: 600;
    color: ${({ fontColor }) => COLORS[fontColor]};
  `,
};

type CompProps = {
  iconName: string;
  sxStyle?: object;
  text: string;
  primaryColor?: 'BLACK' | 'WHITE';
  textSize?: number;
};

const ButtonWithIcon = ({
  iconName,
  sxStyle,
  text,
  primaryColor = 'BLACK',
  textSize = 14,
}: CompProps) => {
  return (
    <S.Wrapper>
      <Icon baseClassName="material-icons" sx={sxStyle}>
        {iconName}
      </Icon>
      <S.Text fontColor={primaryColor} fontSize={textSize}>
        {text}
      </S.Text>
    </S.Wrapper>
  );
};

export default ButtonWithIcon;
