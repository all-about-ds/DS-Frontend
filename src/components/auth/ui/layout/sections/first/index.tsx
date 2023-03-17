import auth from 'api/auth';
import { authEmailAtomFamily, modalAtomFamily, timerAtomFamily } from 'atoms';
import AuthButton from 'components/auth/ui/button';
import AuthInput from 'components/auth/ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { AuthFormSectionPropsInterface } from 'types/auth.type';
import * as S from './style';

function FirstSection(props: AuthFormSectionPropsInterface) {
  const [loaded, setLoaded] = useState<boolean>(true);
  const [_, setEmail] = useRecoilState(authEmailAtomFamily(props.atomKey));
  const [__, setTimer] = useRecoilState(timerAtomFamily(props.atomKey));
  const [, setAuthEmailErrorModal] = useRecoilState(
    modalAtomFamily(props.atomKey)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onValid = async ({ email }: { email: string }) => {
    setLoaded(false);

    try {
      await auth.sendAuthenticationNumber(email);
      setLoaded(true);
      setTimer({
        minute: 5,
        seconds: 0,
      });
      setEmail(email);
      props.setSection(2);
    } catch {
      setLoaded(true);
      setAuthEmailErrorModal(true);
    }
  };

  return (
    <S.FirstSectionLayout onSubmit={handleSubmit(onValid)} isLoading={!loaded}>
      <div className='lds-roller'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <AuthInput
        type='text'
        title={'이메일'}
        margin={'0 auto 24px'}
        placeholder={'이메일을 입력해주세요'}
        isError={Boolean(errors?.email?.message)}
        register={register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
      />
      <S.ErrorText>{errors?.email?.message}</S.ErrorText>
      <S.Description isError={errors?.email?.message}>
        {props.title === '회원가입' && 'DS에 오신 것을 환영해요 😎'}
        {props.title === '비밀번호 찾기' && '가입한 이메일을 입력해주세요 🙂'}
      </S.Description>
      <S.Box>
        <AuthButton>다음</AuthButton>
      </S.Box>
    </S.FirstSectionLayout>
  );
}

export default FirstSection;
