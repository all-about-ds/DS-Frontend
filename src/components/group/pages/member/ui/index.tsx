import React from 'react';
import * as S from './style';
import * as I from '../../../../../assets/svg';
import { UserProps } from 'types/group.type';

function User(props: UserProps) {
  const { isClicked, handleClick, elementIndex } = props;

  return (
    <>
      <S.UserItem>
        <S.UserBox>
          <S.UserProfile src={props.profileImg} alt='그룹원 이미지' />
          <S.UserName>{props.name}</S.UserName>
        </S.UserBox>
        <S.SettingBox onClick={() => handleClick(elementIndex)}>
          <div style={{ cursor: 'pointer' }}>
            {isClicked ? <I.PurpleDot /> : <I.ThreeDot />}
          </div>
          {isClicked && (
            <S.ManageButtonBox>
              <S.NameBox>{props.name}</S.NameBox>
              <S.Line />
              <S.Expel>추방하기</S.Expel>
              <S.Line />
              <S.HandOver>관리자 넘기기</S.HandOver>
            </S.ManageButtonBox>
          )}
        </S.SettingBox>
      </S.UserItem>
    </>
  );
}

export default User;
