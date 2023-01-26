import AuthLayout from 'components/common/layout/auth';
import Background from 'components/common/background';
import * as S from './style';
import React, { useState } from 'react';

function Signin() {
  const [isError, setError] = useState(false);

  return (
    <>
      <Background>
        <AuthLayout title='로그인' progressBar={{ need: false, value: 0 }}>
          <S.DescWrapper>
            <S.IconBox>😎</S.IconBox>
            <S.DescText>
              DS에서 그룹을 만들거나 참여해서 같이 성장해봐!
            </S.DescText>
          </S.DescWrapper>
          <S.InputWrapper>
            <S.InputText
              isError={isError}
              style={{
                color: isError ? '#EE3939' : 'rgba(255, 255, 255, 0.9)',
              }}
            >
              이메일
            </S.InputText>
            <S.InputBox
              placeholder='이메일을 입력해주세요'
              style={{
                border: isError ? '1px solid #EE3939;' : 'none',
                background: isError ? '#412626' : '#232323',
              }}
            ></S.InputBox>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputText
              isError={isError}
              style={{
                color: isError ? '#EE3939' : 'rgba(255, 255, 255, 0.9)',
              }}
            >
              비밀번호
            </S.InputText>
            <S.InputBox
              placeholder='비밀번호를 입력해주세요'
              style={{
                border: isError ? '1px solid #EE3939;' : 'none',
                background: isError ? '#412626' : '#232323',
              }}
            ></S.InputBox>
          </S.InputWrapper>
          {isError && (
            <S.ErrorText>이메일 혹은 비밀번호가 일치하지 않아요</S.ErrorText>
          )}
          <S.Button style={{ marginTop: isError ? '7.5vh' : '10.32vh' }}>
            로그인
          </S.Button>
          <S.BottomTextBox>
            <S.FirstText>DS가 처음이신가요?</S.FirstText>
            <S.ClickText>회원가입</S.ClickText>
          </S.BottomTextBox>
          <S.Bar />
          <S.ClickText>비밀번호 찾기</S.ClickText>
        </AuthLayout>
      </Background>
    </>
  );
}

export default Signin;
