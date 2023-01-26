import React from 'react';
import tokenService from 'utils/tokenService';
import AfterLoginHeader from './afterLoginHeader';
import BeforeLoginHeader from './beforeLoginHeader';
import * as S from './style';

function Header() {
  return (
    <>
      <S.HeaderLayout>
        <S.HeaderContentWrapper>
          <S.LogoText>Do Study</S.LogoText>

          {tokenService.getLocalAccessToken() ? (
            <AfterLoginHeader />
          ) : (
            <BeforeLoginHeader></BeforeLoginHeader>
          )}
        </S.HeaderContentWrapper>
      </S.HeaderLayout>
      <S.HeaderBottomBar />
    </>
  );
}

export default Header;
