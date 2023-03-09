import { groupIsClickedAtom } from 'atoms/container';
import ModalLayout from 'components/common/layout/modal';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from '../../../assets/svg';
import { useNavigate } from 'react-router';
import { GroupType } from 'types/group.type';

interface GroupProps {
  GroupProps: GroupType;
}

function MainModal(props: GroupProps) {
  const [, setGroupIsClicked] = useRecoilState(groupIsClickedAtom);
  const navigate = useNavigate();

  const onClick = () => {
    if (props.GroupProps.secret) {
      // 모달 바꿈
    } else {
      //
    }
  };

  return (
    <ModalLayout setModal={setGroupIsClicked}>
      <S.GroupIsClickedModal onClick={(e) => e.stopPropagation()}>
        <S.Image image={props.GroupProps.groupImg}>
          <S.LockBox>
            <I.Lock />
          </S.LockBox>
          <S.ExitBox onClick={() => setGroupIsClicked(false)}>
            <I.Exit />
          </S.ExitBox>
        </S.Image>
        <S.ContentWrapper>
          <S.memberNum>
            정원 {props.GroupProps.groupMemberCount}/
            {props.GroupProps.groupMaxCount}명
          </S.memberNum>
          <S.Title>{props.GroupProps.groupName}</S.Title>
          <S.UserBox>
            <S.Profile image={props.GroupProps.groupLeaderImg} />
            <S.UserName>{props.GroupProps.groupLeaderName}</S.UserName>
          </S.UserBox>
          <S.Description>{props.GroupProps.groupDescription}</S.Description>
          <S.JoinButton onClick={onClick}>가입</S.JoinButton>
        </S.ContentWrapper>
      </S.GroupIsClickedModal>
    </ModalLayout>
  );
}

export default MainModal;
