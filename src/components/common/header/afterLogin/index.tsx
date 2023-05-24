import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { ReactComponent as Search } from '../../../../assets/svg/search.svg';
import { useNavigate } from 'react-router';
import header from 'api/header';
import { useRecoilState } from 'recoil';
import { SearchAtom } from 'atoms/container';

function AfterLoginHeader() {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [searchEnter, setEnterSearch] = useRecoilState(SearchAtom);

  const getUser = async () => {
    try {
      const response: any = await header.getUserInfo();

      setName(response.data.name);
      setImage(response.data.img);
    } catch (e) {
      console.log(e);
    }
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterSearch((oldValue) => ({
      ...oldValue,
      keyword: e.target.value,
    }));
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (!e.nativeEvent.isComposing) {
        e.preventDefault();
        setEnterSearch((oldValue) => ({
          ...oldValue,
          isSearchRequested: true,
        }));
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {search && (
        <S.SearchBar>
          <div style={{ marginTop: 4 }} className='search'>
            <I.GraySearch />
          </div>
          <S.SearchArea
            placeholder='찾고 싶은 그룹의 이름을 입력해주세요.'
            onChange={onSearch}
            onKeyDown={handleOnKeyPress}
            value={searchEnter.keyword}
          ></S.SearchArea>
        </S.SearchBar>
      )}
      <S.HeaderContentBox>
        <Search
          fill={search ? '#FFFFFF' : '#B9B9B9'}
          onClick={() => setSearch(!search)}
          style={{ marginTop: 4 }}
        />
        <div onClick={() => window.location.replace('/')} className='home'>
          <I.Home />
        </div>
        <div
          onClick={() =>
            navigate('/group/create', {
              state: {
                name,
                profile: image,
              },
            })
          }
        >
          <I.MakeGroup />
        </div>
        {!image && (
          <div onClick={() => navigate('/my')} style={{ cursor: 'pointer' }}>
            <I.DefaultProfile />
          </div>
        )}
        {image && (
          <S.UserProfile
            src={image}
            alt='유저 프로필'
            onClick={() => navigate('/my')}
          />
        )}
        <S.UserName onClick={() => navigate('/my')}>{name}님</S.UserName>
      </S.HeaderContentBox>
    </>
  );
}

export default AfterLoginHeader;
