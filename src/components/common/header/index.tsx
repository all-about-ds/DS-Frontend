import { authEmailAtomFamily, currentSectionsAtomFamily } from 'atoms';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import tokenService from 'utils/tokenService';
import AfterLoginHeader from './afterLogin';
import BeforeLoginHeader from './beforeLogin';
import * as S from './style';

function Header() {
  const { pathname } = useLocation();

  const [signupEmail, setSignupEmail] = useRecoilState(
    authEmailAtomFamily('signup')
  );
  const [findPasswordEmail, setFindPasswordEmail] = useRecoilState(
    authEmailAtomFamily('findPassword')
  );
  const [signupSection, setSignupSection] = useRecoilState(
    currentSectionsAtomFamily('signup')
  );
  const [findPasswordSection, setFindPasswordSection] = useRecoilState(
    currentSectionsAtomFamily('findPassword')
  );

  useEffect(() => {
    if (signupEmail !== '' && signupSection !== 1) {
      if (pathname !== '/auth/signup') {
        setSignupEmail('');
        setSignupSection(1);
      }
    }

    if (findPasswordEmail !== '' && findPasswordSection !== 1) {
      if (pathname !== '/auth/findPassword') {
        setFindPasswordEmail('');
        setFindPasswordSection(1);
      }
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
