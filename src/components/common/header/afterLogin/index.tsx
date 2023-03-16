import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { ReactComponent as Search } from '../../../../assets/svg/search.svg';
import { useNavigate } from 'react-router';
import header from 'api/header';

function AfterLoginHeader() {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const getUser = async () => {
    try {
      const response: any = await header.getUserInfo();
      console.log(response.data);
      setName(response.data.name);
      setImage(response.data.img);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        <S.UserProfile image={image} onClick={() => navigate('/my')} />
        <S.UserName onClick={() => navigate('/my')}>{name}님</S.UserName>
      </S.HeaderContentBox>
    </>
  );
}

export default AfterLoginHeader;
