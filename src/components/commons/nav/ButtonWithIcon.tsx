import React from 'react';
import Icon from '@mui/material/Icon';
import { COLORS } from '@/constants/colors';
import styled from 'styled-components';
import Link from 'next/link';
const S = {
  Wrapper: styled.div<{ selected: boolean }>`
    height: 90px;
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 4px;
    ${({ selected }) => (selected ? `border-bottom: 5px solid ${COLORS.MINT}` : 'inherit')};
  `,
  Text: styled.p<{ fontColor: 'BLACK' | 'WHITE'; fontSize: number }>`
    font-size: ${({ fontSize }) => `${fontSize}px`};
    font-weight: 600;
    color: ${({ fontColor }) => COLORS[fontColor]};
    transition: 0.5s;
  `,
};

type CompProps = {
  iconName: string;
  sxStyle?: object;
  text: string;
  primaryColor?: 'BLACK' | 'WHITE';
  textSize?: number;
  link: string;
  selected: boolean;
};

const ButtonWithIcon = ({
  iconName,
  sxStyle,
  text,
  primaryColor = 'BLACK',
  textSize = 14,
  link,
  selected,
}: CompProps) => {
  const styler = { ...sxStyle, color: primaryColor === 'BLACK' ? '#112211' : '#FFFFFF' };
  return (
    <Link href={`/flights/${link}`}>
      <S.Wrapper selected={selected}>
        <Icon baseClassName="material-icons" sx={styler}>
          {iconName}
        </Icon>
        <S.Text fontColor={primaryColor} fontSize={textSize}>
          {text}
        </S.Text>
      </S.Wrapper>
    </Link>
  );
};

export default ButtonWithIcon;
