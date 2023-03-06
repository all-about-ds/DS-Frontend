import * as S from './style';
import * as I from 'assets/svg';

function GroupPageHeader() {
  return (
    <S.GroupPageHeader>
      <S.Elements>
        <I.BackButton />
      </S.Elements>
      <S.Elements>
        <I.ChattingIcon />
        <I.TimerIcon />
        <I.FaceTimeIcon />
        <I.InformationIcon />
      </S.Elements>
    </S.GroupPageHeader>
  );
}

export default GroupPageHeader;
