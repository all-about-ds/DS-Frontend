import GroupPageHeader from 'components/group/ui/groupPageHeader';
import { Unsubscribe, off, onValue, ref } from '@firebase/database';
import { db } from '../../../../../firebase';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TimerUserInterface } from 'types/user.type';
import MemberTimerItem from '../item';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { userIdAtom, userInfoAtomFamily } from 'atoms/container';
import { set } from 'firebase/database';

type MyInfo = TimerUserInterface;

function GroupTimer() {
  const [users, setUsers] = useState<TimerUserInterface[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const location = useLocation();
  const [userId] = useRecoilState(userIdAtom);
  const [name] = useRecoilState(userInfoAtomFamily('name'));

  const [myInfo, setMyInfo] = useState<MyInfo>({
    name: '',
    time: 0,
    active: false,
    id: 0,
  });

  useEffect(() => {
    const handleBeforeUnload = () => {
      setActive(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const timerRef = ref(db, `timers/${location.state.groupName}/users`);

    const unscribe: Unsubscribe = onValue(timerRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const timer: TimerUserInterface[] = Object.values(data);
        setUsers(timer);
        timer.forEach((item) => {
          if (item.id === userId) {
            setMyInfo(item);
          }
        });
      }
    });

    return () => {
      off(timerRef, 'value', unscribe);
    };
  }, []);

  useEffect(() => {
    let time = Number(myInfo?.time);

    if (active) {
      const id = setInterval(() => {
        time = time += 1;

        set(ref(db, `timers/${location.state.groupName}/users/${name}`), {
          name: name,
          time: time,
          active: active,
          id: userId,
        });
      }, 1000);

      return () => clearInterval(id);
    }

    if (!active && myInfo.time !== 0) {
      set(ref(db, `timers/${location.state.groupName}/users/${name}`), {
        name: name,
        time: time,
        active: false,
        id: userId,
      });
    }
  }, [active]);

  const format = (type: string) => {
    const time = myInfo.time;

    const hour = time / 3600;
    const minute = (time % 3600) / 60;
    const second = time % 60;

    if (type == 'hour') {
      return hour > 9 ? parseInt(String(hour)) : '0' + parseInt(String(hour));
    }

    if (type == 'minute') {
      return minute > 9
        ? parseInt(String(minute))
        : '0' + parseInt(String(minute));
    }

    if (type == 'second') {
      return second > 9 ? second : '0' + second;
    }
  };

  return (
    <S.GroupTimerPageLayout>
      <GroupPageHeader title={location.state.groupName} />
      <S.MyTimerBox>
        <div className='hour'>
          <S.ElementType>시간</S.ElementType>
          <S.ElementValue>{format('hour')}</S.ElementValue>
        </div>
        <S.Colon>:</S.Colon>
        <div className='minute'>
          <S.ElementType>분</S.ElementType>
          <S.ElementValue>{format('minute')}</S.ElementValue>
        </div>
        <S.Colon>:</S.Colon>
        <div className='second'>
          <S.ElementType>초</S.ElementType>
          <S.ElementValue>{format('second')}</S.ElementValue>
        </div>
      </S.MyTimerBox>
      <S.ButtonDecorate />
      {!active && (
        <S.TimerButton onClick={() => setActive(true)}>시작</S.TimerButton>
      )}
      {active && (
        <S.TimerButton onClick={() => setActive(false)}>중단</S.TimerButton>
      )}
      <S.MemberTimerBox>
        {users
          .filter((item) => item.name !== name)
          .map((item, index) => (
            <MemberTimerItem
              key={index}
              memberName={item.name}
              memberTime={item.time}
              isActive={item.active}
            />
          ))}
      </S.MemberTimerBox>
    </S.GroupTimerPageLayout>
  );
}

export default GroupTimer;
