import Background from 'components/common/background';
import AuthLayout from 'components/common/layout/auth';
import * as S from './style';

function SignupPage() {
  return (
    <Background>
      <AuthLayout title='회원가입' progressBar={{ need: true, value: 33 }}>
        <S.InputWrapper>
          <S.InputTitle>이메일</S.InputTitle>
          <S.Input placeholder='이메일을 입력해주세요' type='email' />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.Input placeholder='비밀번호 입력해주세요' type='password' />
        </S.InputWrapper>
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
