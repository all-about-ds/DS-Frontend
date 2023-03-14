import { signupCurrentSectionAtom, signupEmailAtom, timerAtom } from 'atoms';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import tokenService from 'utils/tokenService';
import AfterLoginHeader from './afterLogin';
import BeforeLoginHeader from './beforeLogin';
import * as S from './style';

function Header() {
  const { pathname } = useLocation();
  const [_, setSignupCurrentSection] = useRecoilState(signupCurrentSectionAtom);
  const [___, setTimter] = useRecoilState(timerAtom);
  const [__, setSignEmail] = useRecoilState(signupEmailAtom);

  useEffect(() => {
    if (pathname !== '/auth/signup') {
      setTimter({
        minute: 5,
        seconds: 0,
      });
      setSignupCurrentSection(1);
      setSignEmail('');
    }
  }, []);

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
