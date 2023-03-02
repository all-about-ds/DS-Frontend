import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import MainFrame from 'components/frame/main';
import React, { useState } from 'react';
import * as S from './style';

function Main() {
  const [byPopularity, setByPopularity] = useState<boolean>(true);
  const [byLatest, setByLatest] = useState<boolean>(false);

  const sortButton = (type: string) => {
    if (type === '인기') {
      setByLatest(false);
      setByPopularity(true);
    } else {
      setByLatest(true);
      setByPopularity(false);
    }
  };

  return (
    <>
      <Header />
      <CenterAlignmentLayout>
        <MainFrame>
          <S.SortButtonWrapper>
            <S.SortButton
              style={{
                color: byPopularity ? '#FFFFFF' : '',
              }}
              onClick={() => sortButton('인기')}
            >
              인기
            </S.SortButton>
            <S.SortButton
              style={{
                color: byLatest ? '#FFFFFF' : '',
              }}
              onClick={() => sortButton('최신')}
            >
              최신순
            </S.SortButton>
          </S.SortButtonWrapper>
          <S.GroupBoxWrapper>
            <S.GroupBox>
              <S.Image />
              <S.MaxPeople>정원 20명</S.MaxPeople>
              <S.Title>광주소프트웨어마이스터고등학교</S.Title>
              <S.Description>
                광주광역시 광산구 송정동에 위치한 SW 마이스터 고등학교로
                대한민국에서 세 번째로 개교한 마이스터고이고 가나다라마바사
              </S.Description>
              <S.User>
                <S.Profile image=''></S.Profile>
                <S.UserName>오종진</S.UserName>
              </S.User>
            </S.GroupBox>
          </S.GroupBoxWrapper>
        </MainFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Main;
