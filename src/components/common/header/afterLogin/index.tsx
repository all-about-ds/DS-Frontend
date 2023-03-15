import React, { useState } from 'react';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { ReactComponent as Search } from '../../../../assets/svg/search.svg';
import { useNavigate } from 'react-router';

function AfterLoginHeader() {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {search && (
        <S.SearchBar>
          <div style={{ marginLeft: 23, marginTop: 4 }}>
            <I.GraySearch />
          </div>
          <S.SearchArea placeholder='찾고 싶은 그룹의 이름을 입력해주세요.' />
        </S.SearchBar>
      )}
      <S.HeaderContentBox>
        <Search
          fill={search ? '#FFFFFF' : '#B9B9B9'}
          onClick={() => setSearch(!search)}
          style={{ marginTop: 4 }}
        />
        <div onClick={() => navigate('/')}>
          <I.Home />
        </div>
        <div onClick={() => navigate('/group/create')}>
          <I.MakeGroup />
        </div>
        <S.UserProfile image='' onClick={() => navigate('/my')} />
        <S.UserName onClick={() => navigate('/my')}>오종진님</S.UserName>
      </S.HeaderContentBox>
    </>
  );
}

export default AfterLoginHeader;
