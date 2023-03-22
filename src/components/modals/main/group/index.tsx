import {
  groupIndexAtom,
  groupIsClickedAtom,
  groupPasswordModalAtom,
} from 'atoms/container';
import ModalLayout from 'components/common/layout/modal';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useNavigate } from 'react-router';
import { GroupType } from 'types/group.type';
import group from 'api/group';
import { toast } from 'react-toastify';

interface GroupProps {
  GroupProps: GroupType | undefined;
}

function MainModal(props: GroupProps) {
  const [, setGroupIsClicked] = useRecoilState(groupIsClickedAtom);
  const [, setGroupPasswordModal] = useRecoilState(groupPasswordModalAtom);
  const [index, setIndex] = useRecoilState(groupIndexAtom);
  const navigate = useNavigate();

  const onClick = async () => {
    if (props.GroupProps?.secret) {
      setIndex(props.GroupProps?.idx);
      setGroupIsClicked(false);
      setGroupPasswordModal(true);
    } else {
      try {
        const response: any = await group.joinGroup(
          undefined,
          props.GroupProps?.idx
        );
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
  };

  return (
    <>
      <ModalLayout setModal={setGroupIsClicked}>
        <S.GroupIsClickedModal onClick={(e) => e.stopPropagation()}>
          <S.Image src={props.GroupProps?.img} alt='그룹 모달'>
            {props.GroupProps?.secret && (
              <S.LockBox>
                <I.Lock />
              </S.LockBox>
            )}
            <S.ExitBox onClick={() => setGroupIsClicked(false)}>
              <I.Exit />
            </S.ExitBox>
          </S.Image>
          <S.ContentWrapper>
            <S.memberNum>
              현재 {props.GroupProps?.memberCount}/{props.GroupProps?.maxCount}
              명
            </S.memberNum>
            <S.Title>{props.GroupProps?.name}</S.Title>
            <S.UserBox>
              <S.Profile src={props.GroupProps?.leaderImg} alt='유저 프로필' />
              <S.UserName>{props.GroupProps?.leaderName}</S.UserName>
            </S.UserBox>
            <S.Description>{props.GroupProps?.description}</S.Description>
            <S.JoinButton onClick={onClick}>가입</S.JoinButton>
          </S.ContentWrapper>
        </S.GroupIsClickedModal>
      </ModalLayout>
    </>
  );
}

export default MainModal;
