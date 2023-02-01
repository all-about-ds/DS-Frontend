import AuthButton from 'components/auth/button';
import * as S from './style';

function SignupSecondSection() {
  return (
    <S.SecondSectionLayout>
      <S.Text>입력하신 이메일로 인증번호 4자리를 전송했어요</S.Text>
      <S.InputWrapper>
        <S.AuthenticationNumberInput type='text' />
        <S.AuthenticationNumberInput />
        <S.AuthenticationNumberInput />
        <S.AuthenticationNumberInput />
      </S.InputWrapper>
      <S.ResendBox>
        <p>인증번호가 오지않았나요?</p>
        <p style={{ color: '#7139EA', cursor: 'pointer' }}>재전송</p>
      </S.ResendBox>
      <S.Timer>5: 00</S.Timer>
      <S.Div>
        <AuthButton>다음</AuthButton>
      </S.Div>
    </S.SecondSectionLayout>
  );
}

export default SignupSecondSection;
