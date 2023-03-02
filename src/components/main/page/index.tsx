import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import MainFrame from 'components/frame/main';
import React, { useState } from 'react';
import Group from '../item';
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
            <Group />
          </S.GroupBoxWrapper>
        </MainFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Main;
