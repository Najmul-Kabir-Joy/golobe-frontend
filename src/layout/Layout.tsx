import styled from 'styled-components';
import React from 'react';
import Footer from './Footer/Footer';

const S = {
  LayoutContainer: styled.div`
    width: 100%;
  `,
  LayoutMax: styled.div`
    max-width: 1440px;
    margin: 0 auto;
  `,
};

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <S.LayoutContainer>
      <S.LayoutMax>{children}</S.LayoutMax>
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;
