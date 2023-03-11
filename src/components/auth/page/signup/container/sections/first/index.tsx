import auth from 'api/auth';
import {
  signupCurrentSectionAtom,
  signupEmailAtom,
  signupEmailDuplicationModalAtom,
  timerAtom,
} from 'atoms';
import AuthButton from 'components/auth/ui/button';
import AuthInput from 'components/auth/ui/input';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useResetRecoilState } from 'recoil';
import * as S from './style';

function SignupFirstSection() {
  const [isError, setIsError] = useState<boolean>(false);
  const [_, setSignupCurrentSection] = useRecoilState(signupCurrentSectionAtom);
  const resetTimer = useResetRecoilState(timerAtom);
  const [__, setSignEmail] = useRecoilState(signupEmailAtom);
  const [___, setSignupEmailDuplicationModal] = useRecoilState(
    signupEmailDuplicationModalAtom
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onValid = async ({ email }: { email: string }) => {
    resetTimer();

    try {
      await auth.sendAuthenticationNumber(email);
      setSignEmail(email);
      setSignupCurrentSection(2);
    } catch {
      setSignupEmailDuplicationModal(true);
    }
  };

  const inValid = () => {
    setIsError(true);
    setSignEmail('');
  };

  useEffect(() => {
    if (!errors.email) {
      setIsError(false);
    }
  }, [errors.email]);

  return (
    <S.FirstSectionLayout onSubmit={handleSubmit(onValid, inValid)}>
      <AuthInput
        title={'이메일'}
        margin={'0 auto 24px'}
        placeholder={'이메일을 입력해주세요'}
        isError={isError}
        register={register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
      />
      <S.ErrorText isError={isError}>{errors?.email?.message}</S.ErrorText>
      <S.Description>DS에 오신 것을 환영해요 😎</S.Description>
      <S.Box>
        <AuthButton>다음</AuthButton>
      </S.Box>
    </S.FirstSectionLayout>
  );
}

export default SignupFirstSection;
