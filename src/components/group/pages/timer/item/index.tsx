import * as S from './style';
import * as I from 'assets/svg';

interface MemberTimerItemProps {
  memberName: string;
  memberTime: number;
  isActive: boolean;
}

function MemberTimerItem(props: MemberTimerItemProps) {
  const format = (time: number) => {
    const hour = time / 3600;
    const minute = (time % 3600) / 60;
    const second = time % 60;

    const hourValue =
      hour > 9 ? parseInt(String(hour)) : '0' + parseInt(String(hour));

    const minuteValue =
      minute > 9 ? parseInt(String(minute)) : '0' + parseInt(String(minute));

    const secondValue = second > 9 ? second : '0' + second;

    return hourValue + ':' + minuteValue + ':' + secondValue;
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
