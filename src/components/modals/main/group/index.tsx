import { groupIsClickedAtom, groupPasswordModalAtom } from 'atoms/container';
import ModalLayout from 'components/common/layout/modal';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useNavigate } from 'react-router';
import { GroupType } from 'types/group.type';
import group from 'api/group';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

interface GroupProps {
  GroupProps: GroupType | undefined;
}

function MainModal(props: GroupProps) {
  const [, setGroupIsClicked] = useRecoilState(groupIsClickedAtom);
  const [, setGroupPasswordModal] = useRecoilState(groupPasswordModalAtom);
  const [isMember, setIsMember] = useState<boolean>(false);
  const navigate = useNavigate();

  const onClick = async () => {
    if (isMember) {
      await navigate(`/group/${props.GroupProps?.idx}/information`);
    } else {
      if (props.GroupProps?.secret) {
        setGroupIsClicked(false);
        setGroupPasswordModal(true);
      } else {
        try {
          await group.joinGroup(undefined, props.GroupProps?.idx);
          navigate(`/group/${props.GroupProps?.idx}/information`);
        } catch (e: any) {
          if (e.response.status === 404) {
            toast.error('존재하지 않는 그룹이에요');
          } else if (e.response.status === 409) {
            toast.error('이미 가입된 그룹이에요!');
          }
          console.log(e);
        }
      }
    }
  };

  const getIsMember = async (idx: number | undefined) => {
    try {
      const response: any = await group.getIsMember(idx);
      setIsMember(response.data.isMember);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    getIsMember(props.GroupProps?.idx);
  }, []);

  return (
    <>
      <ModalLayout setModal={setGroupIsClicked}>
        <S.GroupIsClickedModal onClick={(e) => e.stopPropagation()}>
          <div style={{ position: 'relative' }}>
            <S.Image src={props.GroupProps?.img} alt='그룹이미지'></S.Image>
            {props.GroupProps?.secret && (
              <S.LockBox>
                <I.Lock />
              </S.LockBox>
            )}
            <S.ExitBox onClick={() => setGroupIsClicked(false)}>
              <I.Exit />
            </S.ExitBox>
          </div>
          <S.ContentWrapper>
            <S.memberNum>
              현재 {props.GroupProps?.memberCount}/{props.GroupProps?.maxCount}
              명
            </S.memberNum>
            <S.Title>{props.GroupProps?.name}</S.Title>
            <S.UserBox>
              {!props.GroupProps?.leaderImg && <I.DefaultProfile />}
              {props.GroupProps?.leaderImg && (
                <S.Profile
                  src={props.GroupProps?.leaderImg}
                  alt='유저 프로필'
                />
              )}
              <S.UserName>{props.GroupProps?.leaderName}</S.UserName>
            </S.UserBox>
            <S.Description>{props.GroupProps?.description}</S.Description>
            <S.JoinButton onClick={onClick}>
              {isMember ? '이동' : '가입'}
            </S.JoinButton>
          </S.ContentWrapper>
        </S.GroupIsClickedModal>
      </ModalLayout>
    </>
  );
}

export default MainModal;
