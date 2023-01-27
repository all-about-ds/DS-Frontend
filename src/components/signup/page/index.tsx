import Background from 'components/common/background';
import AuthLayout from 'components/common/layout/auth';
import SignupFirstSection from '../section/first';
import * as S from './style';

function SignupPage() {
  return (
    <Background>
      <AuthLayout title='회원가입' progressBar={{ need: true, value: 33 }}>
        <SignupFirstSection />
        <S.SignupButton>다음</S.SignupButton>
        <S.GoLoginBox>
          <p>기존 회원이신가요?</p>
          <p style={{ color: '#7139EA', cursor: 'pointer' }}>로그인</p>
        </S.GoLoginBox>
      </AuthLayout>
    </Background>
  );
}

export default SignupPage;
