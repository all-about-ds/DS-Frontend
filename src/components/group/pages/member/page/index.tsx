import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import * as S from './style';
import * as I from '../../../../../assets/svg';
import React, { useState } from 'react';

function MemberSetting() {
  const [isClicked, setIsClicked] = useState<any[]>();
  const [hh, setHh] = useState<Array<number>>([1, 2]);

  const handleClick = (idx: any) => {
    const newArr = Array(hh.length).fill(false);
    newArr[idx] = true;
    setIsClicked(newArr);
  };

  return (
    <>
      <Header />
      <CenterAlignmentLayout>
        <S.Layout>
          <S.TopText>DS</S.TopText>
          <S.TitleText>그룹원 설정</S.TitleText>
          {hh &&
            hh.map((h: number) => (
              <S.UserBox key={h}>
                <S.UserProfile image='' />
                <S.UserName>박서준</S.UserName>
                <S.SettingBox onClick={handleClick}>
                  {!isClicked && <I.ThreeDot />}
                  {isClicked && <I.PurpleDot />}
                  {isClicked && <></>}
                </S.SettingBox>
              </S.UserBox>
            ))}
        </S.Layout>
      </CenterAlignmentLayout>
    </>
  );
}

export default MemberSetting;
