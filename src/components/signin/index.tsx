import SignFrame from 'components/common/auth/authLayout';
import Background from 'components/common/background';
import * as S from './style';
import React, { useState } from 'react';

function Signin() {
  const [isError, setError] = useState(false);

  return (
    <>
      <Background>
        <SignFrame title='로그인'>
          <S.DescWrapper>
            <S.IconBox>😎</S.IconBox>
            <S.DescText>
              DS에서 그룹을 만들거나 참여해서 같이 성장해봐!
            </S.DescText>
          </S.DescWrapper>

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
            />
          </S.InputWrapper>

          {isError && (
            <S.ErrorText>이메일 혹은 비밀번호가 일치하지 않아요</S.ErrorText>
          )}

          <S.Button style={{ marginTop: isError ? '9.7vh' : '12.92vh' }}>
            로그인
          </S.Button>

          <S.BottomTextBox>
            <S.FirstText>DS가 처음이신가요?</S.FirstText>
            <S.ClickText>회원가입</S.ClickText>
          </S.BottomTextBox>
          <S.Bar />
          <S.ClickText>비밀번호 찾기</S.ClickText>
        </SignFrame>
      </Background>
    </>
  );
}

export default Signin;
