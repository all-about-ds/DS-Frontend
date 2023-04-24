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

function GroupInformation() {
  const [modal, setModal] = useRecoilState(modalAtomFamily('leaveGroup'));

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
      toast.success('그룹을 나갔어요');
      setModal(false);
      navigate('/my');
    } catch {
      toast.error('알 수 없는 오류에요');
      setModal(false);
    }
  };

  return (
    <S.GroupInformationPageLayout>
      {modal && (
        <NormalModal
          atomKey='leaveGroup'
          title='그룹 나가기'
          description='정말 그룹을 나가시겠어요?'
          executionText='나가기'
          onExecute={leaveGroup}
        />
      )}
      <GroupPageHeader />
      <S.GroupImage src={information?.img} alt='그룹 이미지' />
      <S.TitleBox>
        <S.Title>{information?.name}</S.Title>
        {isOwner ? (
          <S.GroupManageButtonBox>
            <div onClick={deleteGroup}>
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
          <S.LeaveGroupText onClick={() => setModal(true)}>
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
            <S.MemberRole>동아리 부장</S.MemberRole>
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
              <S.MemberRole>동아리원</S.MemberRole>
              <S.MemberName>{member.name}</S.MemberName>
            </div>
          </S.MemberBox>
        ))}
      </S.MemberList>
    </S.GroupInformationPageLayout>
  );
}

export default GroupInformation;
