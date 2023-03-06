import React from 'react';
import * as S from './style';
import * as I from '../../../../../assets/svg';
import { UserProps } from 'types/group.type';

function User(props: UserProps) {
  const { isClicked, handleClick, elementIndex } = props;

  return (
    <>
      <S.UserBox>
        <S.UserProfile image='' />
        <S.UserName>박서준</S.UserName>
        <S.SettingBox onClick={() => handleClick(elementIndex)}>
          {isClicked ? <I.PurpleDot /> : <I.ThreeDot />}
          {isClicked && (
            <S.ManageButtonBox>
              <S.NameBox>진시윤님</S.NameBox>
              <S.Line />
              <S.Expel>추방하기</S.Expel>
              <S.Line />
              <S.HandOver>관리자 넘기기</S.HandOver>
            </S.ManageButtonBox>
          )}
        </S.SettingBox>
      </S.UserBox>
    </>
  );
}

export default User;
