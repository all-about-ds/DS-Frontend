import SignFrame from 'components/common/auth/authLayout';
import Background from 'components/common/background';
import * as S from './style';
import React from 'react';

function Signin() {
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
            <S.InputText>이메일</S.InputText>
            <S.InputBox placeholder='이메일을 입력해주세요'></S.InputBox>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputText>비밀번호</S.InputText>
            <S.InputBox placeholder='비밀번호를 입력해주세요'></S.InputBox>
          </S.InputWrapper>
          <S.Button>로그인</S.Button>
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
