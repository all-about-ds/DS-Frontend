import * as S from './style';
import * as I from 'assets/svg';

type titleType = '채팅방' | '그룹정보' | '타이머';

function GroupPageHeader({ title }: { title?: titleType }) {
  return (
    <S.GroupPageHeader>
      <S.Elements className='left'>
        <I.BackButton />
      </S.Elements>
      <S.Elements className='center'>
        <p>{title}</p>
      </S.Elements>
      <S.Elements className='right'>
        <I.ChattingIcon />
        <I.TimerIcon />
        <I.FaceTimeIcon />
        <I.InformationIcon />
      </S.Elements>
    </S.GroupPageHeader>
  );
}

export default GroupPageHeader;
