import { groupIsClickedAtom } from 'atoms/container';
import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import MainFrame from 'components/frame/main';
import MainModal from 'components/modals/main';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import GroupItem from '../item';
import * as S from './style';
import group from 'api/group';
import { GroupContents, GroupType } from 'types/group.type';

function Main() {
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const page = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(true);
  const [byPopularity, setByPopularity] = useState<boolean>(true);
  const [byLatest, setByLatest] = useState<boolean>(false);
  const [groupContents, setGroupContents] = useState<GroupContents[]>([]);
  const [list, setList] = useState<GroupType[]>([]);
  const [groupIsClicked] = useRecoilState(groupIsClickedAtom);

  useEffect(() => {
    console.log(groupContents);
  }, [groupContents]);

  const sortButton = (type: string) => {
    if (type === '인기') {
      setByLatest(false);
      setByPopularity(true);
    } else {
      setByLatest(true);
      setByPopularity(false);
    }
  };

  const getDiaryList = useCallback(async () => {
    setLoaded(false);
    try {
      const response: any = await group.getGroupList({
        keword: undefined,
        page: page.current,
        size: 8,
      });
      console.log(response.data);
      setHasNextPage(response.data.groups.length === 8);
      setList((prevPosts) => [...prevPosts, ...response.data.groups]);
      setLoaded(true);
      if (response.data.groups.length) {
        page.current += 1;
      }
    } catch (e: any) {
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loaded) {
        getDiaryList();
      }
    });

    io.observe(observerTargetEl.current as HTMLElement);
    return () => io.disconnect();
  }, [getDiaryList, hasNextPage]);

  return (
    <>
      {groupIsClicked && <MainModal />}
      <Header />
      <CenterAlignmentLayout>
        <MainFrame>
          <S.SortButtonWrapper>
            <S.SortButton
              style={{
                color: byPopularity ? '#FFFFFF' : '',
              }}
              onClick={() => sortButton('인기')}
            >
              인기
            </S.SortButton>
            <S.SortButton
              style={{
                color: byLatest ? '#FFFFFF' : '',
              }}
              onClick={() => sortButton('최신')}
            >
              최신순
            </S.SortButton>
          </S.SortButtonWrapper>
          <S.GroupBoxWrapper>
            {list.map((group: GroupType, index) => (
              <GroupItem key={index} GroupProps={group} />
            ))}
            <div ref={observerTargetEl} />
          </S.GroupBoxWrapper>
        </MainFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default Main;
