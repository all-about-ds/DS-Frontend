import React from 'react';
import * as S from './style';

interface BackgroundProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Background(props: BackgroundProps) {
  return <S.Background>{props.children}</S.Background>;
}

export default Background;
