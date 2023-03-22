import * as S from './style';
import * as I from 'assets/svg';

function MemberTimerItem({ isActive }: { isActive: boolean }) {
  return (
    <S.MemberTimerItem isActive={isActive}>
      <I.TimerIcon />
      <div>
        <S.MemberName>진시윤님</S.MemberName>
        <S.MemberTimer>00:00:00</S.MemberTimer>
      </div>
    </S.MemberTimerItem>
  );
}

export default MemberTimerItem;
