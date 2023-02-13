import styled from 'styled-components';
import React from 'react';
import Footer from './Footer/Footer';
import NavigationBar from '@/components/commons/layout/NavigationBar';

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
  /* const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 96) {
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
  }, []); */
  return (
    <S.LayoutContainer>
      <S.ContentLayout>
        <NavigationBar />
        {children}
        <Footer />
      </S.ContentLayout>
    </S.LayoutContainer>
  );
};

export default Layout;
