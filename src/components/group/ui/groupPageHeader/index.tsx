import * as S from './style';
import * as I from 'assets/svg';

function GroupPageHeader() {
  return (
    <S.GroupPageHeader>
      <S.Elements className='left'>
        <I.BackButton />
      </S.Elements>
      <S.Elements className='center'>
        <p>그룹정보</p>
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
