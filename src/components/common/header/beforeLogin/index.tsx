import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function BeforeLoginHeader() {
  return (
    <S.HeaderContentBox>
      <Link to={'/auth/signin'}>
        <S.Text>로그인</S.Text>
      </Link>
      <Link to={'/auth/signup '}>
        <S.Text>회원가입</S.Text>
      </Link>
    </S.HeaderContentBox>
  );
}

export default BeforeLoginHeader;
