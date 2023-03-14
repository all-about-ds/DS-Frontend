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
        <S.Image image={props.GroupProps.img}>
          {props.GroupProps.secret && (
            <S.LockBox>
              <I.Lock />
            </S.LockBox>
          )}
        </S.Image>
        <S.MaxPeople>
          현재 {props.GroupProps.memberCount}/{props.GroupProps.maxCount}명
        </S.MaxPeople>
        <S.Title>{props.GroupProps.name}</S.Title>
        <S.Description>{props.GroupProps.description}</S.Description>
        <S.User>
          <S.Profile image={props.GroupProps.leaderImg}></S.Profile>
          <S.UserName>{props.GroupProps.leaderName}</S.UserName>
        </S.User>
      </S.GroupBox>
    </>
  );
}

export default GroupItem;
