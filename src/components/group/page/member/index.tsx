import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import * as S from './style';
import * as I from '../../../../assets/svg';
import React, { useState } from 'react';

function MemberSetting() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const memberClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Header />
      <CenterAlignmentLayout>
        <S.Layout>
          <S.TopText>DS</S.TopText>
          <S.TitleText>그룹원 설정</S.TitleText>
          <S.UserBox>
            <S.UserProfile image='' />
            <S.UserName>박서준</S.UserName>
            <S.SettingBox onClick={memberClick}>
              <I.ThreeDot />
              {isClicked && <></>}
            </S.SettingBox>
          </S.UserBox>
        </S.Layout>
      </CenterAlignmentLayout>
    </>
  );
}

export default MemberSetting;
