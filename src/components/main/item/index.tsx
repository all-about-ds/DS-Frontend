import * as S from './style';
import * as I from '../../../assets/svg';
import { GroupType } from 'types/group.type';

interface GroupProps {
  GroupProps: GroupType;
}

function GroupItem(props: GroupProps) {
  return (
    <>
      <S.GroupBox>
        <S.Image image={props.GroupProps.groupImg}>
          {props.GroupProps.secret && (
            <S.LockBox>
              <I.Lock />
            </S.LockBox>
          )}
        </S.Image>
        <S.MaxPeople>
          현재 {props.GroupProps.groupMemberCount}/
          {props.GroupProps.groupMaxCount}명
        </S.MaxPeople>
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
