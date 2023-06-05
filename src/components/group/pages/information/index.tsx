import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import GroupPageHeader from 'components/group/ui/groupPageHeader';
import { useNavigate, useParams } from 'react-router-dom';
import group from 'api/group';
import { GroupInformationInterface } from 'types/group.type';
import { toast } from 'react-toastify';
import { modalAtomFamily } from 'atoms';
import { useRecoilState } from 'recoil';
import NormalModal from 'components/modals/normal';
import member from 'api/member';
import { groupIsClickedAtom } from 'atoms';
import { ref, remove } from '@firebase/database';
import { db } from '../../../../firebase';
import { userInfoAtomFamily } from 'atoms/container';

function GroupInformation() {
  const [leaveGroupModal, setLeaveGroupModal] = useRecoilState(
    modalAtomFamily('leaveGroup')
  );
  const [deleteGroupModal, setDeleteGroupModal] = useRecoilState(
    modalAtomFamily('deleteGroup')
  );

  const [userName] = useRecoilState(userInfoAtomFamily('name'));
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [information, setInformation] = useState<GroupInformationInterface>();
  const [, setGroupIsClicked] = useRecoilState(groupIsClickedAtom);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getGroupInformationById = async () => {
      try {
        const res: any = await group.getGroupInformation(
          String(params.groupId)
        );
        setIsOwner(res.data.host);
        setInformation(res.data);
      } catch (e: any) {
        if (e.response.status === 404) {
          console.log('없는 그룹');
        }
      }
    };

    getGroupInformationById();
  }, []);

  const deleteGroup = async () => {
    try {
      await group.deleteGroup(information?.idx);
      remove(ref(db, `chattings/${information?.name}`));
      remove(ref(db, `timers/${information?.name}`));
      setDeleteGroupModal(false);
      toast.error('삭제되었습니다!');
      setGroupIsClicked(false);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const leaveGroup = async () => {
    try {
      await member.leaveGroup(String(params.groupId));
      remove(ref(db, `timers/${information?.name}/users/${userName}`));
      setLeaveGroupModal(false);
      toast.success('그룹을 나갔어요');
      navigate('/my');
    } catch {
      setLeaveGroupModal(false);
      toast.error('알 수 없는 오류에요');
    }
  };

  return (
    <S.GroupInformationPageLayout>
      {leaveGroupModal && (
        <NormalModal
          atomKey='leaveGroup'
          title='그룹 나가기'
          description='정말 그룹을 나가시겠어요?'
          executionText='나가기'
          onExecute={leaveGroup}
        />
      )}
      {deleteGroupModal && (
        <NormalModal
          atomKey='deleteGroup'
          title='그룹 삭제하기'
          description='정말 그룹을 삭제 하시겠어요?'
          executionText='삭제하기'
          onExecute={deleteGroup}
        />
      )}
      <GroupPageHeader title={information?.name} />
      <S.GroupImage src={information?.img} alt='그룹 이미지' />
      <S.TitleBox>
        <S.Title>{information?.name}</S.Title>
        {isOwner ? (
          <S.GroupManageButtonBox>
            <div onClick={() => setDeleteGroupModal(true)}>
              <I.DeleteButton />
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() =>
                navigate('/group/edit', {
                  state: {
                    idx: information?.idx,
                    img: information?.img,
                    title: information?.name,
                    description: information?.description,
                    maxCount: information?.memberList.length,
                  },
                })
              }
            >
              <I.OwnerButton />
            </div>
          </S.GroupManageButtonBox>
        ) : (
          <S.LeaveGroupText onClick={() => setLeaveGroupModal(true)}>
            그룹 나가기
          </S.LeaveGroupText>
        )}
      </S.TitleBox>
      <S.Description>{information?.description}</S.Description>
      <S.Line />
      <S.TextMembersBox>
        <S.TextMembers>그룹원들</S.TextMembers>
        {isOwner && (
          <div
            onClick={() => {
              navigate('/group/' + params.groupId + '/member', {
                state: {
                  list: information?.memberList,
                },
              });
            }}
          >
            <I.OwnerButton />
          </div>
        )}
      </S.TextMembersBox>
      <div style={{ margin: '0px 0px 2px 0.3975rem' }}>
        <I.OwnerIcon />
      </div>
      <S.MemberList>
        <S.MemberBox key={'head'}>
          {!information?.head.profileImg && <I.DefaultProfile />}
          {information?.head.profileImg && (
            <S.MemberImage
              src={information?.head.profileImg}
              alt='그룹원 이미지'
            />
          )}
          <div>
            <S.MemberRole>그룹 부장</S.MemberRole>
            <S.MemberName>{information?.head.name}</S.MemberName>
          </div>
        </S.MemberBox>
        {information?.memberList.map((member) => (
          <S.MemberBox key={member.idx}>
            {!member.profileImg && <I.DefaultProfile />}
            {member.profileImg && (
              <S.MemberImage src={member.profileImg} alt='그룹원 이미지' />
            )}
            <div>
              <S.MemberRole>그룹원</S.MemberRole>
              <S.MemberName>{member.name}</S.MemberName>
            </div>
          </S.MemberBox>
        ))}
      </S.MemberList>
    </S.GroupInformationPageLayout>
  );
}

export default GroupInformation;
