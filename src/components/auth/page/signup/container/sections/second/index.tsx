import { timerAtom } from 'atoms';
import AuthButton from 'components/auth/ui/button';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

function SignupSecondSection() {
  const [timer, setTimer] = useRecoilState(timerAtom);
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value && index < 3) {
      const nextInput = document.getElementById(`input${index + 2}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.keyCode === 8 && inputs[index] === '') {
      const prevInput = document.getElementById(`input${index}`);
      prevInput?.focus();
    }
  };

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

  const checkAuthenticationNumber = () => {
    console.log();
  };

  return (
    <S.SecondSectionLayout>
      <S.Text>입력하신 이메일로 인증번호 4자리를 전송했어요</S.Text>
      <S.NumberForm isError={errorMessage}>
        {inputs.map((input, index) => (
          <S.AuthenticationNumberInput
            key={index}
            id={`input${index + 1}`}
            type='text'
            value={input}
            maxLength={1}
            tabIndex={index + 1}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </S.NumberForm>
      <S.ResendBox>
        <p>인증번호가 오지않았나요?</p>
        <p style={{ color: '#7139EA', cursor: 'pointer' }}>재전송</p>
      </S.ResendBox>
      <S.Timer>
        {timer.minute}:
        {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
      </S.Timer>
      <S.ErrorText isError={errorMessage}>{errorMessage}</S.ErrorText>
      <S.Div>
        <AuthButton onClick={checkAuthenticationNumber}>다음</AuthButton>
      </S.Div>
    </S.SecondSectionLayout>
  );
}

export default SignupSecondSection;
