import auth from 'api/auth';
import { authEmailAtomFamily, modalAtomFamily, timerAtomFamily } from 'atoms';
import AuthButton from 'components/auth/ui/button';
import AuthInput from 'components/auth/ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AuthFormSectionPropsInterface } from 'types/auth.type';
import * as S from './style';

function FirstSection(props: AuthFormSectionPropsInterface) {
  const [loaded, setLoaded] = useState<boolean>(true);
  const setEmail = useSetRecoilState(authEmailAtomFamily(props.atomKey));
  const setTimer = useSetRecoilState(timerAtomFamily(props.atomKey));
  const setAuthErrorModal = useSetRecoilState(modalAtomFamily(props.atomKey));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    defaultValues: {
      email: useRecoilValue(authEmailAtomFamily(props.atomKey)),
    },
  });

  const onValid = async ({ email }: { email: string }) => {
    setLoaded(false);

    try {
      switch (props.atomKey) {
        case 'signup': {
          await auth.sendSignupAuthenticationNumber(email);
          break;
        }
        case 'findPassword': {
          await auth.sendFindPasswordAuthenticationNumber(email);
          break;
        }
      }
      setLoaded(true);
      setEmail(email);
      setTimer({
        minute: 5,
        seconds: 0,
      });
      props.setSection(2);
    } catch {
      setLoaded(true);
      setAuthErrorModal(true);
    }
  };

  return (
    <S.FirstSectionLayout onSubmit={handleSubmit(onValid)} isLoading={!loaded}>
      <S.LoadingAnimation className='lds-roller'>
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
      </S.LoadingAnimation>
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
