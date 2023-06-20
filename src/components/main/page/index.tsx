import Header from 'components/common/header';
import MainModal from 'components/modals/main/group';
import { useCallback, useEffect, useRef, useState } from 'react';
import GroupItem from '../item';
import * as S from './style';
import group from 'api/group';
import { GroupType } from 'types/group.type';
import { useRecoilState } from 'recoil';
import { groupIsClickedAtom } from 'atoms';
import {
  groupPasswordModalAtom,
  SearchAtom,
  userIdAtom,
} from 'atoms/container';
import PasswordModal from 'components/modals/main/passwordCheck';
import tokenService from 'utils/tokenService';
import { useNavigate } from 'react-router';
import user from 'api/user';

function Main() {
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const latestPage = useRef<number>(0);
  const popularPage = useRef<number>(0);
  const [hasNextLatestPage, setHasNextLatestPage] = useState<boolean>(true);
  const [hasNextPopularPage, setHasNextPopularPage] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(true);
  const [byPopularity, setByPopularity] = useState<boolean>(false);
  const [latestList, setLatestList] = useState<GroupType[]>([]);
  const [popularList, setPopularList] = useState<GroupType[]>([]);
  const [modalData, setModalData] = useState<GroupType>();
  const [groupIsClicked, setGroupIsClicked] =
    useRecoilState(groupIsClickedAtom);
  const [groupPassword] = useRecoilState(groupPasswordModalAtom);
  const [, setUserId] = useRecoilState(userIdAtom);
  const [search, setSearch] = useRecoilState(SearchAtom);
  const navigate = useNavigate();

  const groupClick = (props: GroupType) => {
    if (!tokenService.getLocalAccessToken()) {
      navigate('auth/signin');
    } else {
      setModalData(props);
      setGroupIsClicked(true);
    }
  };

  const getGroupList = useCallback(async () => {
    setLoaded(false);
    try {
      if (!byPopularity) {
        const response: any = await group.getGroupList({
          keyword: search.keyword === '' ? undefined : search.keyword,
          page: latestPage.current,
          size: 8,
          popularity: false,
        });

        setHasNextLatestPage(response.data.groups.length === 8);
        setLatestList((prevPosts) => [...prevPosts, ...response.data.groups]);
        setLoaded(true);

        if (response.data.groups.length === 8) {
          latestPage.current += 1;
        }
      } else if (byPopularity) {
        const response: any = await group.getGroupList({
          keyword: search.keyword === '' ? undefined : search.keyword,
          page: popularPage.current,
          size: 8,
          popularity: true,
        });

        setHasNextPopularPage(response.data.groups.length === 8);
        setPopularList((prevPosts) => [...prevPosts, ...response.data.groups]);
        setLoaded(true);

        if (response.data.groups.length === 8) {
          popularPage.current += 1;
        }
      }
    } catch (e: any) {
      Promise.reject(e);
    }
  }, [search, byPopularity]);

  useEffect(() => {
    if (
      !observerTargetEl.current ||
      (byPopularity && !hasNextPopularPage) ||
      (!byPopularity && !hasNextLatestPage)
    )
      return;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loaded) {
        getGroupList();
      }
    });

    io.observe(observerTargetEl.current as HTMLElement);
    return () => io.disconnect();
  }, [getGroupList, hasNextLatestPage, byPopularity, !loaded]);

  useEffect(() => {
    if (search.isSearchRequested) {
      latestPage.current = 0;
      setLatestList([]);
      setByPopularity(false);
      getGroupList();
      setSearch((oldValue) => ({
        ...oldValue,
        keyword: '',
        isSearchRequested: false,
      }));
    }
  }, [search.isSearchRequested]);

  useEffect(() => {
    const getId = async () => {
      try {
        const res: any = await user.getUserId();
        setUserId(res.data.uid);
      } catch (error) {
        console.log(error);
      }
    };

    if (tokenService.getLocalAccessToken()) {
      getId();
    }
  }, []);

  return (
    <>
      {groupPassword && (
        <PasswordModal index={modalData?.idx} groupName={modalData?.name} />
      )}
      {groupIsClicked && <MainModal GroupProps={modalData} />}
      <Header />
      <S.MainPageLayout>
        <S.SortButtonWrapper>
          <S.SortButton
            byPopularity={!byPopularity}
            onClick={() => setByPopularity(false)}
          >
            최신순
          </S.SortButton>
          <S.SortButton
            byPopularity={byPopularity}
            onClick={() => setByPopularity(true)}
          >
            인기
          </S.SortButton>
        </S.SortButtonWrapper>
        <S.GroupBoxWrapper>
          {byPopularity
            ? popularList.map((group: GroupType, index: number) => (
                <div key={index} onClick={() => groupClick(group)}>
                  <GroupItem GroupProps={group} />
                </div>
              ))
            : latestList.map((group: GroupType, index: number) => (
                <div key={index} onClick={() => groupClick(group)}>
                  <GroupItem GroupProps={group} />
                </div>
              ))}
          <div ref={observerTargetEl} style={{ marginTop: 12 }} />
        </S.GroupBoxWrapper>
      </S.MainPageLayout>
    </>
  );
}

export default Main;
