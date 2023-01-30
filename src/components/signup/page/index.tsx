import {
  signupCurrentSectionAtom,
  signupEmailDuplicationModalAtom,
} from 'atoms';
import Header from 'components/common/header';
import AuthFrame from 'components/frame/auth';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import SignupEmailDuplicationModal from 'components/modals/signupException';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import SignupSectionContainer from '../container';
import * as S from './style';

function SignupPage() {
  const [signupEmailDuplicationModal, _] = useRecoilState(
    signupEmailDuplicationModalAtom
  );
  const [signupCurrentSection, __] = useRecoilState(signupCurrentSectionAtom);

  const [progress, setProgress] = useState(33);

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

  return (
    <>
      {signupEmailDuplicationModal && <SignupEmailDuplicationModal />}
      <Header />
      <CenterAlignmentLayout>
        <AuthFrame
          title='회원가입'
          progressBar={{ need: true, value: progress }}
        >
          <SignupSectionContainer />
          <S.GoLoginBox>
            <p>기존 회원이신가요?</p>
            <p style={{ color: '#7139EA', cursor: 'pointer' }}>로그인</p>
          </S.GoLoginBox>
        </AuthFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default SignupPage;
