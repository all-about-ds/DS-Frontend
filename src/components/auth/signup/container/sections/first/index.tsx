import AuthButton from 'components/auth/button';
import * as S from './style';

function SignupFirstSection() {
  return (
    <S.FirstSectionLayout>
      <S.InputWrapper>
        <S.InputTitle>이메일</S.InputTitle>
        <S.Input placeholder='이메일을 입력해주세요' type='email' />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.Input placeholder='비밀번호 입력해주세요' type='password' />
      </S.InputWrapper>
      <AuthButton style={{ margin: '10.5rem 0 1rem' }}>다음</AuthButton>
    </S.FirstSectionLayout>
  );
}

export default SignupFirstSection;
