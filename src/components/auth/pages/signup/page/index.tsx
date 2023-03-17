import {
  signupCurrentSectionAtom,
  signupEmailAtom,
  signupEmailDuplicationModalAtom,
} from 'atoms';
import Header from 'components/common/header';
import AuthFrame from 'components/frame/auth';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import AuthEmailErrorModal from 'components/modals/authException';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import SignupSectionContainer from '../container';
import * as S from './style';
import { useNavigate } from 'react-router';

function Signup() {
  const [signupEmailDuplicationModal, _] = useRecoilState(
    signupEmailDuplicationModalAtom
  );
  const [signupCurrentSection, setSignupCurrentSection] = useRecoilState(
    signupCurrentSectionAtom
  );
  const [__, setSignupEmail] = useRecoilState(signupEmailAtom);
  const navigate = useNavigate();

  const [progress, setProgress] = useState<number>(33);

  useEffect(() => {
    switch (signupCurrentSection) {
      case 1:
        setProgress(33);
        break;
      case 2:
        setProgress(66);
        break;
      case 3:
        setProgress(100);
        break;
    }
  }, [signupCurrentSection]);

  const onLogin = () => {
    setSignupEmail('');
    setSignupCurrentSection(1);
    navigate('/auth/signin');
  };

  return (
    <>
      {/* {signupEmailDuplicationModal && <AuthEmailErrorModal />} */}
      <Header />
      <CenterAlignmentLayout>
        <AuthFrame
          title='회원가입'
          progressBarValue={progress}
          setSection={setSignupCurrentSection}
        >
          <SignupSectionContainer />
          <S.GoLoginBox>
            <p>기존 회원이신가요?</p>
            <p
              style={{ color: '#7139EA', cursor: 'pointer' }}
              onClick={onLogin}
            >
              로그인
            </p>
          </S.GoLoginBox>
        </AuthFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Signup;
