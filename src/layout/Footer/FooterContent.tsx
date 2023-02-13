import React from 'react';
import styled from 'styled-components';
import Logo from '@/assets/logo/Logo';
import Fb from '@/assets/icons/Fb';
import Twt from '@/assets/icons/Twt';
import Yt from '@/assets/icons/Yt';
import Ins from '@/assets/icons/Ins';
import footerData from '@/assets/data/Footer.json';
import { COLORS } from '@/constants/colors';

const S = {
  FooterMainContainer: styled.div`
    width: 100%;
    height: 422px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background-color: ${COLORS.MINT};
    padding: 0 104px;
    z-index: 2;
  `,
  FooterMainGrid: styled.div`
    max-width: 1440px;
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 140px;
    margin: 206px auto 0 auto;
  `,
  FooterMainGridLogo: styled.div``,
  FooterMainGridContent: styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
    h4 {
      font-size: 16px;
      font-weight: bold;
      color: ${COLORS.BLACKISH_GREEN};
      text-transform: capitalize;
    }
  `,
  FooterMainGridContentList: styled.div`
    margin-top: 22px;
    p {
      font-size: 14px;
      font-weight: 500;
      color: ${COLORS.BLACKISH_GREEN};
      text-transform: capitalize;
      margin-top: 16px;
      cursor: pointer;
      opacity: 0.7;
      transition: 0.3s;
      &:hover {
        opacity: 1;
      }
    }
  `,
  FooterMainGridLogoSocial: styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
  `,
  SocialItem: styled.div`
    cursor: pointer;
  `,
};

const FooterContent = () => {
  return (
    <S.FooterMainContainer>
      <S.FooterMainGrid>
        <S.FooterMainGridLogo>
          <Logo golobeColor="white" />
          <S.FooterMainGridLogoSocial>
            <S.SocialItem>
              <Fb />
            </S.SocialItem>
            <S.SocialItem>
              <Twt />
            </S.SocialItem>
            <S.SocialItem>
              <Yt />
            </S.SocialItem>
            <S.SocialItem>
              <Ins />
            </S.SocialItem>
          </S.FooterMainGridLogoSocial>
        </S.FooterMainGridLogo>
        <S.FooterMainGridContent>
          {footerData.map((item, index) => {
            return (
              <div key={`index_${index}`}>
                <h4>{item.title}</h4>
                <S.FooterMainGridContentList>
                  {item.list.map((listItem) => {
                    return <p key={`id_${Math.random()}`}>{listItem}</p>;
                  })}
                </S.FooterMainGridContentList>
              </div>
            );
          })}
        </S.FooterMainGridContent>
      </S.FooterMainGrid>
    </S.FooterMainContainer>
  );
};

export default FooterContent;
