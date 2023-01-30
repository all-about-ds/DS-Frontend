import * as S from './style';

function SignupSecondSection() {
  return (
    <S.FirstSectionLayout>
      <S.InputWrapper>
        <S.InputTitle>asd</S.InputTitle>
        <S.Input placeholder='이메일을 입력해주세요' type='email' />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.Input placeholder='비밀번호 입력해주세요' type='password' />
      </S.InputWrapper>
    </S.FirstSectionLayout>
  );
}

export default SignupSecondSection;
