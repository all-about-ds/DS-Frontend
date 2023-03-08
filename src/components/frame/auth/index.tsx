import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';

interface AuthFrameProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: '회원가입' | '로그인' | '비밀번호 찾기';
  progressBarValue?: number;
}

function AuthFrame(props: AuthFrameProps) {
  return (
    <S.AuthFrame>
      {props.title === '로그인' && <S.LoginText>{props.title}</S.LoginText>}
      {props.title === ('회원가입' || '비밀번호 찾기') && (
        <S.TopBox>
          <I.AuthGoBackIcon />
          <S.AuthText>{props.title}</S.AuthText>
          <I.AuthExitIcon />
        </S.TopBox>
      )}
      {props.progressBarValue ? (
        <S.ProgressBar id='progress' value={props.progressBarValue} max='100' />
      ) : (
        <></>
      )}
      {props.children}
    </S.AuthFrame>
  );
}

export default AuthFrame;
