import SignupButton from 'components/signup/common';
import * as S from './style';

function SignupThirdSection() {
  return (
    <S.SecondSectionLayout>
      <S.Text>
        이제 마지막 단계에요, DS에서 사용하실 닉네임을 입력해주세요.
      </S.Text>
      <S.InputWrapper>
        <S.InputTitle>닉네임</S.InputTitle>
        <S.Input placeholder='닉네임을 입력해주세요' type='text' />
      </S.InputWrapper>
      <S.Div>
        <SignupButton>완료</SignupButton>
      </S.Div>
    </S.SecondSectionLayout>
  );
}

export default SignupThirdSection;
