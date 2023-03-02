import AuthButton from 'components/auth/ui/button';
import * as S from './style';

function SignupThirdSection() {
  return (
    <S.ThirdSectionLayout>
      <S.Text>
        이제 마지막 단계에요, DS에서 사용하실 닉네임을 입력해주세요.
      </S.Text>
      <S.InputWrapper>
        <S.InputTitle>닉네임</S.InputTitle>
        <S.Input placeholder='닉네임을 입력해주세요' type='text' />
      </S.InputWrapper>
      <S.Div>
        <AuthButton>완료</AuthButton>
      </S.Div>
    </S.ThirdSectionLayout>
  );
}

export default SignupThirdSection;
