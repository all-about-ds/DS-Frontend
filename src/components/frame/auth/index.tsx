import React from 'react';
import * as S from './style';

interface AuthFrameProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: '회원가입' | '로그인' | '비밀번호 찾기';
  progressBar: {
    need: boolean;
    value: number;
  };
}

function AuthFrame(props: AuthFrameProps) {
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

export default AuthFrame;
