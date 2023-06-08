import AuthFrame from 'components/frame/auth';
import * as S from './style';
import { useState } from 'react';
import Header from '../../../common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import { useForm } from 'react-hook-form';
import { LoginInterface } from 'types/auth.type';
import auth from 'api/auth';
import { useNavigate } from 'react-router-dom';
import tokenService from 'utils/tokenService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Loader from 'components/auth/ui/loading';

function Signin() {
  const navigate = useNavigate();
  const [isError, setError] = useState<boolean>(false);
  const [isRequestEnd, setIsRequestEnd] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginInterface>();

  const onValid = async (data: LoginInterface) => {
    setIsRequestEnd(false);
    try {
      setError(false);
      const response: any = await auth.signin(data);
      setIsRequestEnd(true);
      tokenService.setUser(response.data);
      toast.success('로그인 성공!');
      navigate('/');
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error('유효하지 않는 비밀번호입니다!');
        setIsRequestEnd(true);
      }
      if (e.response.status === 404) {
        toast.error('존재하지 않는 이메일입니다!');
        setIsRequestEnd(true);
      }
    }
  };

  const inValid = () => setError(true);

  return (
    <>
      <Header />
      <CenterAlignmentLayout>
        <AuthFrame title='로그인'>
          <Loader isLoading={!isRequestEnd} />
          <S.DescWrapper>
            <S.IconBox>😎</S.IconBox>
            <S.DescText>
              DS에서 그룹을 만들거나 참여해서 같이 성장해봐!
            </S.DescText>
          </S.DescWrapper>
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <S.InputWrapper>
              <S.InputText isError={isError}>이메일</S.InputText>
              <S.InputBox
                isError={isError}
                placeholder='이메일을 입력해주세요'
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
              <S.InputText isError={isError}>비밀번호</S.InputText>
              <S.InputBox
                isError={isError}
                placeholder='비밀번호를 입력해주세요'
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
            <S.Button isError={isError} disabled={isSubmitting}>
              로그인
            </S.Button>
          </form>
          <S.BottomTextBox>
            <S.FirstText>DS가 처음이신가요?</S.FirstText>
            <Link to={'/auth/signup'}>
              <S.ClickText>회원가입</S.ClickText>
            </Link>
          </S.BottomTextBox>
          <S.Bar />
          <Link to={'/auth/findPassword'}>
            <S.ClickText>비밀번호 찾기</S.ClickText>
          </Link>
        </AuthFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Signin;
