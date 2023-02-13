import Logo from '@/assets/logo/Logo';
import React from 'react';
import styled from 'styled-components';
import AuthenticatedNav from '../nav/AuthenticatedNav';
import ButtonWithIcon from '../nav/ButtonWithIcon';
import UnAutenticatedNav from '../nav/UnAutenticatedNav';

const S = {
  NavContainer: styled.nav`
    position: sticky;
    top: 0;
  `,
  NavigationWrapper: styled.div`
    width: 100%;
    height: 90px;
    padding: 0 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  NavigationContainer: styled.nav`
    width: 100%;
    height: 96px;
    position: sticky;
    top: 44px;
    left: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 32px;
    background-color: transparent;
    z-index: 1;
    transform: translate(-50%, -50%);
    background-color: yellow;
  `,
  NavLeftItems: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  `,
  NavLogoWrapper: styled.div``,
  AuthComponent: styled.div``,
};

const NavigationBar = () => {
  const isAuthenticated = false;

  return (
    <S.NavContainer>
      <S.NavigationWrapper>
        <S.NavLeftItems>
          <ButtonWithIcon iconName="flight" sxStyle={{ rotate: '90deg' }} text={'Find Flight'} />
          <ButtonWithIcon iconName="bed" text={'Find Stays'} />
        </S.NavLeftItems>
        <S.NavLogoWrapper>
          <Logo color="black" />
        </S.NavLogoWrapper>
        <S.AuthComponent>
          {isAuthenticated ? <AuthenticatedNav /> : <UnAutenticatedNav />}
        </S.AuthComponent>
      </S.NavigationWrapper>
    </S.NavContainer>
  );
};

export default NavigationBar;
