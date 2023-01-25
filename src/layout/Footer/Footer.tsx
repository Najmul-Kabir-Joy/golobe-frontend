import styled from 'styled-components';
import React from 'react';
import FooterContent from './FooterContent';
import Subscribe from './Subscribe';

const S = {
  FooterContainer: styled.footer`
    height: 573px;
    position: relative;
  `,
};

const Footer = () => {
  return (
    <S.FooterContainer>
      <Subscribe />
      <FooterContent />
    </S.FooterContainer>
  );
};

export default Footer;
