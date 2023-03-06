import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import * as S from './style';
import * as I from '../../../../../assets/svg';
import React, { useState } from 'react';
import User from '../ui';

function MemberSetting() {
  const [isClicked, setIsClicked] = useState<any>(false);
  const [hh, setHh] = useState<Array<number>>([1, 2]);

  const handleClick = (idx: any) => {
    const newArr = Array(hh.length).fill(false);
    newArr[idx] = !isClicked[idx];
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
            hh.map((h: number, index) => (
              <User
                key={h}
                handleClick={handleClick}
                elementIndex={index}
                isClicked={isClicked[index]}
              />
            ))}
          <S.SubmithButtonBox>
            <S.CancelButton>취소</S.CancelButton>
            <S.SubmitButton>완료</S.SubmitButton>
          </S.SubmithButtonBox>
        </S.Layout>
      </CenterAlignmentLayout>
    </>
  );
}

export default MemberSetting;
