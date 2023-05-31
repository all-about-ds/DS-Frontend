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
        <div style={{ position: 'relative' }}>
          <S.Image src={props.GroupProps.img} alt='그룹이미지'></S.Image>
          {props.GroupProps.secret && (
            <S.LockBox>
              <I.Lock />
            </S.LockBox>
          )}
        </div>
        <S.MaxPeople>
          현재 {props.GroupProps.memberCount}/{props.GroupProps.maxCount}명
        </S.MaxPeople>
        <S.Title>{props.GroupProps.name}</S.Title>
        <S.Description>{props.GroupProps.description}</S.Description>
        <S.User>
          {!props.GroupProps.leaderImg && (
            <div style={{ marginRight: 8 }}>
              <I.DefaultProfile />
            </div>
          )}
          {props.GroupProps.leaderImg && (
            <S.Profile
              src={props.GroupProps.leaderImg}
              alt='방장 프로필'
            ></S.Profile>
          )}
          <S.UserName>{props.GroupProps.leaderName}</S.UserName>
        </S.User>
      </S.GroupBox>
    </>
  );
}

export default GroupItem;
