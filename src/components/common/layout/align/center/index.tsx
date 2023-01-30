import React from 'react';
import * as S from './style';

interface CenterAlignmentLayoutProps {
  children: React.ReactNode;
}

function CenterAlignmentLayout(props: CenterAlignmentLayoutProps) {
  return <S.CenterAlignmentLayout>{props.children}</S.CenterAlignmentLayout>;
}

export default CenterAlignmentLayout;
