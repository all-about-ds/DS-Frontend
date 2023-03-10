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
import tokenService from 'utils/tokenService';

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
      setIndex(props.GroupProps.idx);
      setGroupIsClicked(false);
      setGroupPasswordModal(true);
    } else {
      const response = await group.joinGroup(undefined, index);
      navigate(`/group/information/${index}`);
    }
  };

  return (
    <>
      <ModalLayout setModal={setGroupIsClicked}>
        <S.GroupIsClickedModal onClick={(e) => e.stopPropagation()}>
          <S.Image image={props.GroupProps?.groupImg}>
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
              현재 {props.GroupProps?.groupMemberCount}/
              {props.GroupProps?.groupMaxCount}명
            </S.memberNum>
            <S.Title>{props.GroupProps?.groupName}</S.Title>
            <S.UserBox>
              <S.Profile image={props.GroupProps?.groupLeaderImg} />
              <S.UserName>{props.GroupProps?.groupLeaderName}</S.UserName>
            </S.UserBox>
            <S.Description>{props.GroupProps?.groupDescription}</S.Description>
            <S.JoinButton onClick={onClick}>가입</S.JoinButton>
          </S.ContentWrapper>
        </S.GroupIsClickedModal>
      </ModalLayout>
    </>
  );
}

export default MainModal;
