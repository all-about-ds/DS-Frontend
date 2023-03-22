import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import MainFrame from 'components/frame/main';
import MainModal from 'components/modals/main/group';
import { useCallback, useEffect, useRef, useState } from 'react';
import GroupItem from '../item';
import * as S from './style';
import group from 'api/group';
import { GroupType } from 'types/group.type';
import { useRecoilState } from 'recoil';
import { groupIsClickedAtom } from 'atoms';
import {
  groupIndexAtom,
  groupPasswordModalAtom,
  SearchAtom,
} from 'atoms/container';
import PasswordModal from 'components/modals/main/passwordCheck';

function Main() {
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const page = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(true);
  const [byPopularity, setByPopularity] = useState<boolean>(true);
  const [byLatest, setByLatest] = useState<boolean>(false);
  const [list, setList] = useState<GroupType[]>([]);
  const [modalData, setModalData] = useState<GroupType>();
  const [groupIsClicked, setGroupIsClicked] =
    useRecoilState(groupIsClickedAtom);
  const [groupPassword] = useRecoilState(groupPasswordModalAtom);
  const [index] = useRecoilState(groupIndexAtom);
  const [search, setSearch] = useRecoilState(SearchAtom);

  const sortButton = (type: string) => {
    if (type === '인기') {
      setByLatest(false);
      setByPopularity(true);
    } else {
      setByLatest(true);
      setByPopularity(false);
    }
  };

  const groupClick = (props: GroupType) => {
    setModalData(props);
    setGroupIsClicked(true);
  };

  const getGroupList = useCallback(async () => {
    setLoaded(false);
    try {
      const response: any = await group.getGroupList({
        keyword: search.keyword === '' ? undefined : search.keyword,
        page: page.current,
        size: 8,
      });

      setHasNextPage(response.data.groups.length === 8);
      setList((prevPosts) => [...prevPosts, ...response.data.groups]);
      setLoaded(true);

      if (response.data.groups.length) {
        page.current += 1;
      }
    } catch (e: any) {
      throw new Error(e);
    }
  }, [search]);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loaded) {
        getGroupList();
      }
    });

    io.observe(observerTargetEl.current as HTMLElement);
    return () => io.disconnect();
  }, [getGroupList, hasNextPage]);

  useEffect(() => {
    if (search.isSearchRequested) {
      page.current = 0;
      setList([]);
      getGroupList();
      setSearch((oldValue) => ({
        ...oldValue,
        keyword: '',
        isSearchRequested: false,
      }));
    }
  }, [search.isSearchRequested]);

  return (
    <>
      {groupPassword && <PasswordModal index={index} />}
      {groupIsClicked && <MainModal GroupProps={modalData} />}
      <Header />
      <CenterAlignmentLayout>
        <MainFrame>
          <S.SortButtonWrapper>
            <S.SortButton
              byPopularity={byPopularity}
              onClick={() => sortButton('인기')}
            >
              인기
            </S.SortButton>
            <S.SortButton
              byPopularity={byLatest}
              onClick={() => sortButton('최신')}
            >
              최신순
            </S.SortButton>
          </S.SortButtonWrapper>

          <S.GroupBoxWrapper>
            {list.map((group: GroupType, index: number) => (
              <div key={index} onClick={() => groupClick(group)}>
                <GroupItem GroupProps={group} />
              </div>
            ))}
            <div ref={observerTargetEl} />
          </S.GroupBoxWrapper>
        </MainFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Main;
