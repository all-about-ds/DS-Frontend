import * as S from './style';
import * as I from '../../../assets/svg';
import { useRecoilState } from 'recoil';
import { groupIsClickedAtom } from 'atoms/container';
import { GroupType } from 'types/group.type';

interface GroupProps {
  GroupProps: GroupType;
}

function GroupItem(props: GroupProps) {
  const [, setGroupIsClicked] = useRecoilState(groupIsClickedAtom);

  const onClick = () => {
    setGroupIsClicked(true);
  };

  return (
    <>
      <S.GroupBox onClick={onClick}>
        <S.Image image={props.GroupProps.groupImg}>
          {props.GroupProps.secret && (
            <S.LockBox>
              <I.Lock />
            </S.LockBox>
          )}
        </S.Image>
        <S.MaxPeople>정원 {props.GroupProps.groupMaxCount}명</S.MaxPeople>
        <S.Title>{props.GroupProps.groupName}</S.Title>
        <S.Description>{props.GroupProps.groupDescription}</S.Description>
        <S.User>
          <S.Profile image={props.GroupProps.groupLeaderImg}></S.Profile>
          <S.UserName>{props.GroupProps.groupLeaderName}</S.UserName>
        </S.User>
      </S.GroupBox>
    </>
  );
}

export default GroupItem;
