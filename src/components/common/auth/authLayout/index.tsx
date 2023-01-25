import React from 'react';
import * as S from './style';

interface AuthLayoutProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  title: string;
}

function SignFrame(props: AuthLayoutProps) {
  return (
    <>
      <S.SignFrame>
        <S.TitleText>{props.title}</S.TitleText>
        {props.children}
      </S.SignFrame>
    </>
  );
}

export default SignFrame;
