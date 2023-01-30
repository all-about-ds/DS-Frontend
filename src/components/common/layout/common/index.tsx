import React from 'react';
import * as S from './style';

interface BackgroundProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function CommonLayout(props: BackgroundProps) {
  return <S.CommonLayout>{props.children}</S.CommonLayout>;
}

export default CommonLayout;
