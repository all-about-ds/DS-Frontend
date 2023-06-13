import * as S from './style';
import * as I from 'assets/svg';
import auth from 'api/auth';
import { authEmailAtomFamily } from 'atoms';
import AuthButton from 'components/auth/ui/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { AuthFormSectionPropsInterface } from 'types/auth.type';
import Loader from 'components/auth/ui/loading';

interface UseFormType {
  input1: string;
  input2: string;
}

function ThirdSection(props: AuthFormSectionPropsInterface) {
  const [isRequestEnd, setIsRequestEnd] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const email = useRecoilValue(authEmailAtomFamily(props.atomKey));
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const { register, handleSubmit } = useForm<UseFormType>();

  const onValid = async (data: UseFormType) => {
    setIsRequestEnd(false);
    if (props.atomKey === 'signup') {
      try {
        await auth.signup({
          name: data.input1,
          email: email,
          password: data.input2,
        });
        setIsRequestEnd(true);
        toast.success('회원가입 성공!');
        navigate('/auth/signin');
      } catch {
        setErrorMessage('이미 있는 이름이에요');
        setIsRequestEnd(true);
      }
    }

    if (props.atomKey === 'findPassword') {
      if (data.input1 === data.input2) {
        try {
          await auth.findPassword({
            email: email,
            password: data.input1,
          });
          setIsRequestEnd(true);
          toast.success('비밀번호를 변경했어요!');
          navigate('/auth/signin');
        } catch (e) {
          console.log(e);

          setIsRequestEnd(true);
          setErrorMessage('알 수 없는 에러에요');
        }
      } else {
        setIsRequestEnd(true);
        setErrorMessage('비밀번호가 일치하지 않아요');
      }
    }
  };

  const inValid = (e: any) => {
    const input1 = e?.input1;
    const input2 = e?.input2;

    if (input1 && input1.message) {
      setErrorMessage(e.input1.message);
    }

    if (input2 && input2.message) {
      setErrorMessage(e.input2.message);
    }
  };

  const inputsRendering = () => {
    const view = [];

    switch (props.atomKey) {
      case 'signup':
        view.push(
          <div key={1}>
            <S.InputWrapper className='name'>
              <S.InputTitle isError={Boolean(errorMessage)}>
                닉네임
              </S.InputTitle>
              <S.Input
                placeholder='닉네임을 입력해주세요'
                type='text'
                {...register('input1', {
                  required: '이름은 필수 입력입니다.',
                  minLength: {
                    message: '닉네임은 2자 이상이어야해요.',
                    value: 2,
                  },
                  maxLength: {
                    message: '닉네임은 최대 8자 입니다.',
                    value: 8,
                  },
                })}
                isError={Boolean(errorMessage)}
              />
            </S.InputWrapper>
            <S.InputWrapper
              className='password'
              isError={Boolean(errorMessage)}
            >
              <S.InputTitle isError={Boolean(errorMessage)}>
                비밀번호
              </S.InputTitle>
              <S.InputBox isError={Boolean(errorMessage)}>
                <S.Input
                  className='password-input'
                  placeholder='비밀번호를 입력해주세요'
                  type={showPassword ? 'text' : 'password'}
                  {...register('input2', {
                    required: '이름은 필수 입력입니다.',
                    minLength: {
                      message: '비밀번호는 8자 이상이어야해요.',
                      value: 8,
                    },
                    maxLength: {
                      message: '비밀번호는 최대 16자 입니다.',
                      value: 16,
                    },
                    pattern: {
                      message: '잘못된 비밀번호 형식이에요.',
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    },
                  })}
                />
                <div onClick={toggleShowPassword}>
                  {!showPassword && <I.HidePassword />}
                  {showPassword && <I.ShowPassword />}
                </div>
              </S.InputBox>
            </S.InputWrapper>
          </div>
        );
        break;
      case 'findPassword':
        view.push(
          <div key={2}>
            <S.InputWrapper
              className='password'
              isError={Boolean(errorMessage)}
            >
              <S.InputTitle isError={Boolean(errorMessage)}>
                비밀번호
              </S.InputTitle>
              <S.InputBox isError={Boolean(errorMessage)}>
                <S.Input
                  className='password-input'
                  placeholder='비밀번호를 입력해주세요'
                  type={showPassword ? 'text' : 'password'}
                  {...register('input1', {
                    required: '이름은 필수 입력입니다.',
                    minLength: {
                      message: '비밀번호는 8자 이상이어야해요.',
                      value: 8,
                    },
                    maxLength: {
                      message: '비밀번호는 최대 16자 입니다.',
                      value: 16,
                    },
                    pattern: {
                      message: '잘못된 비밀번호 형식이에요.',
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    },
                  })}
                />
                <div onClick={toggleShowPassword}>
                  {!showPassword && <I.HidePassword />}
                  {showPassword && <I.ShowPassword />}
                </div>
              </S.InputBox>
            </S.InputWrapper>
            <S.InputWrapper className='name'>
              <S.InputTitle isError={Boolean(errorMessage)}>
                비밀번호 재입력
              </S.InputTitle>
              <S.Input
                placeholder='비밀번호를 다시 입력해주세요'
                type='text'
                {...register('input2', {
                  required: '비밀번호 재입력은 필수 입력입니다.',
                })}
                isError={Boolean(errorMessage)}
              />
            </S.InputWrapper>
          </div>
        );
        break;
    }
    return view;
  };

  return (
    <S.ThirdSectionLayout onSubmit={handleSubmit(onValid, inValid)}>
      <Loader isLoading={!isRequestEnd} />
      <S.Text>
        {props.title === '회원가입'
          ? '사용하실 닉네임과 비밀번호를 입력해주세요.'
          : '다시 사용하실 비밀번호를 설정해주세요.'}
      </S.Text>
      <S.Text className='password-description'>
        비밀번호는 8~16자 영문, 숫자, 특수문자를 사용하세요.
      </S.Text>
      <>{inputsRendering()}</>
      <S.ErrorText isError={errorMessage}>{errorMessage}</S.ErrorText>
      <S.Box>
        <AuthButton>완료</AuthButton>
      </S.Box>
    </S.ThirdSectionLayout>
  );
}

export default ThirdSection;
