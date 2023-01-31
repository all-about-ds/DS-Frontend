import AuthFrame from 'components/frame/auth';
import * as S from './style';
import { useState } from 'react';
import Header from '../common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import { useForm } from 'react-hook-form';
import { LoginInterface } from 'types/auth.type';
import auth from 'api/auth';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [isError, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginInterface>();

  const onValid = async (data: LoginInterface) => {
    try {
      setError(false);
      const response = await auth.signin(data);
      if (response === 200) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const inValid = (error: any) => {
    setError(true);
    console.log(error);
  };

  return (
    <>
      <Header />

      <CenterAlignmentLayout>
        <AuthFrame title='로그인' progressBar={{ need: false, value: 0 }}>
          <S.DescWrapper>
            <S.IconBox>😎</S.IconBox>
            <S.DescText>
              DS에서 그룹을 만들거나 참여해서 같이 성장해봐!
            </S.DescText>
          </S.DescWrapper>
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <S.InputWrapper>
              <S.InputText
                style={{
                  color: isError ? '#EE3939' : 'rgba(255, 255, 255, 0.9)',
                }}
              >
                이메일
              </S.InputText>
              <S.InputBox
                isError={isError}
                placeholder='이메일을 입력해주세요'
                style={{
                  border: isError ? '1px solid #EE3939' : 'none',
                  background: isError ? '#412626' : '#232323',
                }}
                {...register('email', {
                  required: '이메일은 필수 입력입니다.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식에 맞지 않습니다.',
                  },
                })}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputText
                style={{
                  color: isError ? '#EE3939' : 'rgba(255, 255, 255, 0.9)',
                }}
              >
                비밀번호
              </S.InputText>
              <S.InputBox
                isError={isError}
                placeholder='비밀번호를 입력해주세요'
                style={{
                  border: isError ? '1px solid #EE3939' : 'none',
                  background: isError ? '#412626' : '#232323',
                }}
                type='password'
                {...register('password', {
                  required: '비밀번호는 필수 입력입니다.',
                  minLength: {
                    value: 8,
                    message: '8자 이상 15자 이하 비밀번호를 입력해주세요.',
                  },
                  maxLength: {
                    value: 15,
                    message: '8자 이상 15자 이하 비밀번호를 입력해주세요.',
                  },
                })}
              />
            </S.InputWrapper>
            {isError && (
              <S.ErrorTextBox>
                <S.ErrorText>
                  이메일 혹은 비밀번호가 일치하지 않아요
                </S.ErrorText>
              </S.ErrorTextBox>
            )}
            <S.Button
              style={{ marginTop: isError ? '7.5vh' : '10.32vh' }}
              disabled={isSubmitting}
            >
              로그인
            </S.Button>
          </form>
          <S.BottomTextBox>
            <S.FirstText>DS가 처음이신가요?</S.FirstText>
            <S.ClickText>회원가입</S.ClickText>
          </S.BottomTextBox>
          <S.Bar />
          <S.ClickText>비밀번호 찾기</S.ClickText>
        </AuthFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Signin;
