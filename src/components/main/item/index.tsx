import React, { useState } from 'react';
import * as S from './style';
import * as I from '../../../assets/svg';

function GroupItem() {
  const [isLocked] = useState<boolean>(false);

  return (
    <>
      <S.GroupBox>
        <S.Image>
          {isLocked && (
            <S.LockBox>
              <I.Lock />
            </S.LockBox>
          )}
        </S.Image>
        <S.MaxPeople>정원 20명</S.MaxPeople>
        <S.Title>광주소프트웨어마이스터고등학교</S.Title>
        <S.Description>
          광주광역시 광산구 송정동에 위치한 SW 마이스터 고등학교로 대한민국에서
          세 번째로 개교한 마이스터고이고 가나다라마바사
        </S.Description>
        <S.User>
          <S.Profile image=''></S.Profile>
          <S.UserName>오종진</S.UserName>
        </S.User>
      </S.GroupBox>
    </>
  );
}

export default GroupItem;
