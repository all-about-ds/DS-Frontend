import React from 'react';
import * as S from './style';

interface MainFrameProps {
  children: React.ReactNode;
}

function MainFrame(props: MainFrameProps) {
  return <S.MainFrame>{props.children}</S.MainFrame>;
}

export default MainFrame;
