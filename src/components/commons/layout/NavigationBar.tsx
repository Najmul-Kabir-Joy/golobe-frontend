import Logo from '@/assets/logo/Logo';
import React from 'react';
import styled from 'styled-components';
import AuthenticatedNav from '../nav/AuthenticatedNav';
import ButtonWithIcon from '../nav/ButtonWithIcon';
import UnAutenticatedNav from '../nav/UnAutenticatedNav';

const S = {
  NavContainer: styled.nav<{ isScrolled: boolean; path: string }>`
    position: fixed;
    width: 100%;
    max-width: 1440px;
    top: 0;
    z-index: 1;
    margin-top: ${({ isScrolled, path }) => (isScrolled || path !== '/' ? '0' : '24px')};
  `,
  NavigationWrapper: styled.div<{ isScrolled: boolean; path: string }>`
    width: 100%;
    height: ${({ isScrolled }) => (isScrolled ? '90px' : '96px')};
    padding: ${({ isScrolled }) => (isScrolled ? '0 104px' : '0 62px')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ isScrolled, path }) =>
      isScrolled || path !== '/' ? 'white' : 'transparent'};
    transition: 0.3s;
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

const NavigationBar = ({ isScrolled, path }: { isScrolled: boolean; path: string }) => {
  const isAuthenticated = false;
  return (
    <S.NavContainer isScrolled={isScrolled} path={path}>
      <S.NavigationWrapper isScrolled={isScrolled} path={path}>
        <S.NavLeftItems>
          <ButtonWithIcon
            iconName="flight"
            sxStyle={{ rotate: '90deg' }}
            text={'Find Flight'}
            primaryColor={isScrolled ? 'BLACK' : 'WHITE'}
          />
          <ButtonWithIcon
            iconName="bed"
            text={'Find Stays'}
            primaryColor={isScrolled ? 'BLACK' : 'WHITE'}
          />
        </S.NavLeftItems>
        <S.NavLogoWrapper>
          <Logo color={isScrolled ? 'black' : 'white'} />
        </S.NavLogoWrapper>
        <S.AuthComponent>
          {isAuthenticated ? (
            <AuthenticatedNav />
          ) : (
            <UnAutenticatedNav bg={isScrolled ? 'BLACK' : 'WHITE'} />
          )}
        </S.AuthComponent>
      </S.NavigationWrapper>
    </S.NavContainer>
  );
};

export default NavigationBar;
