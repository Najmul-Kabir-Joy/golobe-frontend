import { NextPage } from 'next';
import styled from 'styled-components';
import BgCover from '../assets/images/home-page/home-cover.png';
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
    border-radius: 24px;
    overflow: hidden;
    margin-top: 96px;
  `,
  Banner: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: url(${BgCover.src});
    background-size: cover;
  `,
};

/* 

 <S.Container>
      <S.BannerWrapper>
        <S.Banner />
      </S.BannerWrapper>
    </S.Container>

*/

const HomePage: NextPage = () => {
  return <p style={{ height: '200px', background: 'red' }}></p>;
};

export default HomePage;
