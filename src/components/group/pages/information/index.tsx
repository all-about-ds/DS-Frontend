import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import GroupPageHeader from 'components/group/ui/groupPageHeader';
import { useNavigate, useParams } from 'react-router-dom';
import group from 'api/group';
import { GroupInformationInterface } from 'types/group.type';
import { toast } from 'react-toastify';

function GroupInformation() {
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [information, setInformation] = useState<GroupInformationInterface>();
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
      const response: any = await group.deleteGroup(information?.idx);
      toast.error('삭제되었습니다!');
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.GroupInformationPageLayout>
      <GroupPageHeader />
      <S.GroupImage src={information?.img} alt='그룹 이미지' />
      <S.TitleBox>
        <S.Title>{information?.name}</S.Title>
        <I.OwnerButton />
      </S.TitleBox>
      <S.Description>{information?.description}</S.Description>
      <S.Line />
      <S.TextMembersBox>
        <S.TextMembers>그룹원들</S.TextMembers>
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
      </S.TextMembersBox>
      <div style={{ margin: '0px 0px 2px 12.43px' }}>
        <I.OwnerIcon />
      </div>
      <S.MemberList>
        <S.MemberBox key={'head'}>
          <S.MemberImage
            src={information?.head.profileImg}
            alt='그룹원 이미지'
          />
          <div>
            <S.MemberRole>동아리 부장</S.MemberRole>
            <S.MemberName>{information?.head.name}</S.MemberName>
          </div>
        </S.MemberBox>
        {information?.memberList.map((member) => (
          <S.MemberBox key={member.idx}>
            <S.MemberImage src={member.profileImg} alt='그룹원 이미지' />
            <div>
              <S.MemberRole>동아리원</S.MemberRole>
              <S.MemberName>{member.name}</S.MemberName>
            </div>
          </S.MemberBox>
        ))}
      </S.MemberList>
      {isOwner && (
        <S.RemoveGroupButton onClick={deleteGroup}>
          그룹삭제
        </S.RemoveGroupButton>
      )}
    </S.GroupInformationPageLayout>
  );
}

export default GroupInformation;
