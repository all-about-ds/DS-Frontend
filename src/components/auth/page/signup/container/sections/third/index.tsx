import AuthButton from 'components/auth/ui/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './style';
import * as I from 'assets/svg';
import auth from 'api/auth';
import { useRecoilState } from 'recoil';
import { signupCurrentSectionAtom, signupEmailAtom } from 'atoms';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface UseFormType {
  name: string;
  password: string;
}

function SignupThirdSection() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [signupEmail, setSignupEmail] = useRecoilState(signupEmailAtom);
  const [_, setSignupCurrentSection] = useRecoilState(signupCurrentSectionAtom);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseFormType>();

  const onValid = async (data: UseFormType) => {
    try {
      await auth.signup({
        name: data.name,
        email: signupEmail,
        password: data.password,
      });
      navigate('/auth/signin');
      setSignupEmail('');
      setSignupCurrentSection(1);
      toast.success('회원가입 성공!');
    } catch {
      setErrorMessage('이미 있는 이름이에요');
    }
  };

  const inValid = () => {
    setErrorMessage('빈칸을 다시 확인해주세요');
  };

  return (
    <S.ThirdSectionLayout onSubmit={handleSubmit(onValid, inValid)}>
      <S.Text>사용하실 닉네임과 비밀번호를 입력해주세요.</S.Text>
      <S.Text className='password-description'>
        비밀번호는 8~16자 영문, 숫자, 특수문자를 사용하세요.
      </S.Text>
      <S.InputWrapper className='name'>
        <S.InputTitle isError={Boolean(errorMessage)}>닉네임</S.InputTitle>
        <S.Input
          placeholder='닉네임을 입력해주세요'
          type='text'
          {...register('name', {
            required: '이름은 필수 입력입니다.',
          })}
          isError={Boolean(errorMessage)}
        />
      </S.InputWrapper>
      <S.InputWrapper className='password' isError={Boolean(errorMessage)}>
        <S.InputTitle isError={Boolean(errorMessage)}>비밀번호</S.InputTitle>
        <S.InputBox isError={Boolean(errorMessage)}>
          <S.Input
            className='password-input'
            placeholder='비밀번호를 입력해주세요'
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
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
      <S.ErrorText isError={errorMessage}>{errorMessage}</S.ErrorText>
      <S.Box>
        <AuthButton>완료</AuthButton>
      </S.Box>
    </S.ThirdSectionLayout>
  );
}

export default SignupThirdSection;
