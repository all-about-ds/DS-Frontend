import GroupPageHeader from 'components/group/ui/groupPageHeader';
import MemberTimerItem from './item';
import * as S from './style';

function GroupTimer() {
  return (
    <S.GroupTimerPageLayout>
      <GroupPageHeader title={'타이머'} />
      <S.MyTimerBox>
        <div className='hour'>
          <S.ElementType>시간</S.ElementType>
          <S.ElementValue>00</S.ElementValue>
        </div>
        <S.Colon>:</S.Colon>
        <div className='minute'>
          <S.ElementType>분</S.ElementType>
          <S.ElementValue>00</S.ElementValue>
        </div>
        <S.Colon>:</S.Colon>
        <div className='second'>
          <S.ElementType>초</S.ElementType>
          <S.ElementValue>00</S.ElementValue>
        </div>
      </S.MyTimerBox>
      <S.ButtonDecorate />
      <S.TimerButton>시작</S.TimerButton>

      <S.MemberTimerBox>
        <MemberTimerItem isActive={true} />
        <MemberTimerItem isActive={false} />
      </S.MemberTimerBox>
    </S.GroupTimerPageLayout>
  );
}

export default GroupTimer;
