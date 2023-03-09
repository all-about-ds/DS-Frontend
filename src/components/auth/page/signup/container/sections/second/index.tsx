import { timerAtom } from 'atoms';
import AuthButton from 'components/auth/ui/button';
import { KeyboardEventHandler, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

function SignupSecondSection() {
  const [timer, setTimer] = useRecoilState(timerAtom);

  const input1 = useRef<HTMLInputElement>(null);
  const input2 = useRef<HTMLInputElement>(null);
  const input3 = useRef<HTMLInputElement>(null);
  const input4 = useRef<HTMLInputElement>(null);

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

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Backspace' && e.currentTarget.value.length === 1) {
      switch (e.currentTarget.name) {
        case 'input1':
          input2.current?.focus();
          break;
        case 'input2':
          input3.current?.focus();
          break;
        case 'input3':
          input4.current?.focus();
          break;
        case 'input4':
          input1.current?.focus();
          break;
        default:
          break;
      }
    }
  };

  return (
    <S.SecondSectionLayout>
      <S.Text>입력하신 이메일로 인증번호 4자리를 전송했어요</S.Text>
      <S.NumberForm>
        <S.AuthenticationNumberInput
          name={'input1'}
          type='text'
          maxLength={1}
          ref={input1}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <S.AuthenticationNumberInput
          name={'input2'}
          type='text'
          maxLength={1}
          ref={input2}
          onKeyDown={handleKeyDown}
        />
        <S.AuthenticationNumberInput
          name={'input3'}
          type='text'
          maxLength={1}
          ref={input3}
          onKeyDown={handleKeyDown}
        />
        <S.AuthenticationNumberInput
          name={'input4'}
          type='text'
          maxLength={1}
          ref={input4}
          onKeyDown={handleKeyDown}
        />
      </S.NumberForm>
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
