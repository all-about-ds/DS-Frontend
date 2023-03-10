import { timerAtom } from 'atoms';
import AuthButton from 'components/auth/ui/button';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

function SignupSecondSection() {
  const [timer, setTimer] = useRecoilState(timerAtom);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer.seconds > 0) {
        setTimer((oldValue: { seconds: number }) => ({
          ...oldValue,
          seconds: oldValue.seconds - 1,
        }));
      }
      if (timer.seconds === 0) {
        if (timer.minute === 0) {
          clearInterval(countdown);
        } else {
          setTimer((oldValue: { minute: number }) => ({
            minute: oldValue.minute - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

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
      <S.Timer>
        {timer.minute}:
        {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
      </S.Timer>
      <S.Div>
        <AuthButton>다음</AuthButton>
      </S.Div>
    </S.SecondSectionLayout>
  );
}

export default SignupSecondSection;
