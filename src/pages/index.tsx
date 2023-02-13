import { NextPage } from 'next';
import styled from 'styled-components';
import BgCover from '../assets/images/home-page/home-cover.jpg';
const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
  `,
  BannerWrapper: styled.div`
    height: 599px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    overflow: hidden;
  `,
  Banner: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: url(${BgCover.src});
    background-size: cover;
    border-radius: 24px;
    background-position: center;
  `,
};

const HomePage: NextPage = () => {
  return (
    <S.Container>
      <S.BannerWrapper>
        <S.Banner />
      </S.BannerWrapper>
    </S.Container>
  );
};

export default HomePage;
