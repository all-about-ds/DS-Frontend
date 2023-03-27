import * as S from './style';
import * as I from 'assets/svg';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

type titleType = '채팅방' | '그룹정보' | '타이머';

function GroupPageHeader({ title }: { title?: titleType }) {
  const params = useParams();
  const { pathname } = useLocation();

  const select = (currentPath: string) => {
    if (currentPath === pathname) {
      return 'active';
    }
  };

  return (
    <S.GroupPageHeader>
      <S.Elements>
        <Link to={'/'}>
          <I.BackButton />
        </Link>
      </S.Elements>
      <S.Elements className='center'>
        <p>{title}</p>
      </S.Elements>
      <S.Elements>
        <Link to={'/group/' + params.groupId + '/chatting'}>
          <div className={select('/group/' + params.groupId + '/chatting')}>
            <I.ChattingIcon />
          </div>
        </Link>
        <Link to={'/group/' + params.groupId + '/timer'}>
          <div className={select('/group/' + params.groupId + '/timer')}>
            <I.TimerIcon />
          </div>
        </Link>
        <I.FaceTimeIcon />
        <Link to={'/group/' + params.groupId + '/information'}>
          <div className={select('/group/' + params.groupId + '/information')}>
            <I.InformationIcon />
          </div>
        </Link>
      </S.Elements>
    </S.GroupPageHeader>
  );
}

export default GroupPageHeader;

// 그룹 해더
