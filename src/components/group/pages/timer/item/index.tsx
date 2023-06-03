import * as S from './style';
import * as I from 'assets/svg';

interface MemberTimerItemProps {
  memberName: string;
  memberTime: number;
  isActive: boolean;
}

function MemberTimerItem(props: MemberTimerItemProps) {
  const format = (time: number) => {
    const hour =
      time / 3600 > 9
        ? parseInt(String(time / 3600))
        : '0' + parseInt(String(time / 3600));

    const min =
      (time % 3600) / 60 > 9
        ? parseInt(String((time % 3600) / 60))
        : '0' + parseInt(String(time / 3600));

    const sec = time % 60 > 9 ? time % 60 : '0' + (time % 60);

    return hour + ':' + min + ':' + sec;
  };

  return (
    <S.MemberTimerItem isActive={props.isActive}>
      <I.TimerIcon />
      <div>
        <S.MemberName>{props.memberName}</S.MemberName>
        <S.MemberTimer>{format(props.memberTime)}</S.MemberTimer>
      </div>
    </S.MemberTimerItem>
  );
}

export default MemberTimerItem;
