import React from 'react';
import * as S from './style';

interface AuthLayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: '회원가입' | '로그인' | '비밀번호 찾기';
  progressBar: {
    need: boolean;
    value: number;
  };
}

function AuthLayout(props: AuthLayoutProps) {
  return (
    <S.AuthFrame>
      <S.TitleText>{props.title}</S.TitleText>
      {props.progressBar.need ? (
        <S.ProgressBar
          id='progress'
          value={props.progressBar.value}
          max='100'
        />
      ) : (
        <></>
      )}
      {props.children}
    </S.AuthFrame>
  );
}

export default AuthLayout;
