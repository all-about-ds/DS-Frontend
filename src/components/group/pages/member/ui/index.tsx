import React from 'react';
import * as S from './style';
import * as I from '../../../../../assets/svg';
import { UserProps } from 'types/group.type';
import { toast } from 'react-toastify';
import group from 'api/group';
import { useNavigate, useParams } from 'react-router-dom';

function User(props: UserProps) {
  const { isClicked, handleClick, elementIndex } = props;
  const params = useParams();
  const navigate = useNavigate();

  const onKickMember = async () => {
    try {
      await group.kickMember(Number(params.groupId), props.idx);
      toast.success(props.name + '님을 추방했어요');
    } catch {
      toast.error('알 수 없는 오류에요');
    }
  };

  const onMandateMember = async () => {
    try {
      await group.mandateMember(Number(params.groupId), props.idx);
      toast.success('위임을 성공했어요');
      navigate('/group/' + params.groupId + '/information');
    } catch {
      toast.error('알 수 없는 오류에요');
    }
  };

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
              <S.Expel onClick={onKickMember}>추방하기</S.Expel>
              <S.Line />
              <S.HandOver onClick={onMandateMember}>관리자 넘기기</S.HandOver>
            </S.ManageButtonBox>
          )}
        </S.SettingBox>
      </S.UserItem>
    </>
  );
}

export default User;
