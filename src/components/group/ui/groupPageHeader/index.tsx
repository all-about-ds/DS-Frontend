import * as S from './style';
import * as I from 'assets/svg';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { groupTitleAtom } from 'atoms/container';

type titleType = string | '그룹정보' | '타이머';

function GroupPageHeader({ title }: { title?: titleType }) {
  const params = useParams();
  const { pathname } = useLocation();
  const [groupTitle, setGroupTitle] = useRecoilState(groupTitleAtom);

  const select = (currentPath: string) => {
    if (currentPath === pathname) {
      return 'active';
    }
  };

  useEffect(() => {
    if (title !== undefined && title !== '타이머') {
      setGroupTitle(title);
    }
  }, [title]);

  return (
    <S.GroupPageHeader>
      <S.Elements>
        <Link
          to={'/'}
          onClick={() => {
            setGroupTitle('');
          }}
        >
          <I.BackButton />
        </Link>
      </S.Elements>
      <S.Elements className='center'>
        <p>{title}</p>
      </S.Elements>
      <S.Elements>
        <Link
          to={'/group/' + params.groupId + '/chatting'}
          state={{ groupName: groupTitle }}
        >
          <div className={select('/group/' + params.groupId + '/chatting')}>
            <I.ChattingIcon />
          </div>
        </Link>
        <Link
          to={'/group/' + params.groupId + '/timer'}
          state={{ groupName: groupTitle }}
        >
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
