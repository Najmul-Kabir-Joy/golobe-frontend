import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Footer from './Footer/Footer';
import NavigationBar from '@/components/commons/layout/NavigationBar';
import { useRouter } from 'next/router';

const S = {
  LayoutContainer: styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    min-height: 100vh;
  `,
  ContentLayout: styled.div`
    max-width: 1440px;
    max-height: 100%;
    margin: 0 auto;
  `,
};

const Layout = ({ children }: { children: JSX.Element }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30 && path === '/') {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [path]);
  return (
    <S.LayoutContainer>
      <S.ContentLayout>
        <NavigationBar isScrolled={isScrolled} path={path} />
        {children}
      </S.ContentLayout>
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;
