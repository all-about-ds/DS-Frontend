import tokenService from 'utils/tokenService';
import AfterLoginHeader from './afterLogin';
import BeforeLoginHeader from './beforeLogin';
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
            <BeforeLoginHeader />
          )}
        </S.HeaderContentWrapper>
      </S.HeaderLayout>
      <S.HeaderBottomBar />
    </>
  );
}

export default Header;
