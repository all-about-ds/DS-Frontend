import {
  signupCurrentSectionAtom,
  signupEmailDuplicationModalAtom,
} from 'atoms';
import Background from 'components/common/background';
import AuthLayout from 'components/common/layout/auth';
import SignupEmailDuplicationModal from 'components/modals/signupException';
import { useRecoilState } from 'recoil';
import SignupSectionContainer from '../container';
import * as S from './style';

function SignupPage() {
  const [signupEmailDuplicationModal, _] = useRecoilState(
    signupEmailDuplicationModalAtom
  );

  return (
    <>
      {signupEmailDuplicationModal && <SignupEmailDuplicationModal />}
      <Background>
        <AuthLayout title='회원가입' progressBar={{ need: true, value: 33 }}>
          <SignupSectionContainer />
          <S.GoLoginBox>
            <p>기존 회원이신가요?</p>
            <p style={{ color: '#7139EA', cursor: 'pointer' }}>로그인</p>
          </S.GoLoginBox>
        </AuthLayout>
      </Background>
    </>
  );
}

export default SignupPage;
