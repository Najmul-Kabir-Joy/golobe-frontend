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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 24px;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
    }
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
