import * as S from './style';
import * as I from 'assets/svg';
import { useState } from 'react';
import GroupPageHeader from 'components/group/ui/groupPageHeader';

function GroupInformation() {
  const [isOwner, setIsOwner] = useState<boolean>(false);

  return (
    <S.GroupInformationPageLayout>
      <GroupPageHeader />
      <S.GroupImage
        src='https://mblogthumb-phinf.pstatic.net/MjAxNzA0MTlfMTM1/MDAxNDkyNTQ0OTExODU2.O_zowy-4bYAqqjN0X-muG2w0Y5yCcS2ohYhSkiZwzC0g.GHDfrpt_xE8Wo_qhTOtfupeVs04Zb3DzHWT7BPF4Xccg.JPEG.badpark/1920X1080-06.jpg?type=w800'
        alt='그룹 이미지'
      />
      <S.TitleBox>
        <S.Title>그냥 공부하는 방</S.Title>
        {isOwner && <I.OwnerButton />}
      </S.TitleBox>
      <S.Description>
        광주광역시 광산구 송정동에 위치한 SW 마이스터 고등학교로 대한민국에서 세
        번째로 개교한 소프트웨어 마이스터고다. 광주광역시 광산구 송정동에 위치한
        SW 마이스터 고등학교로 대한민국에서 세 번째로 개교한 소프트웨어
        마이스터고다. 광주광역시 광산구 송정동에 위치한 SW 마이스터 고등학교로
        대한민국에서 세 번째로 개교한 소프트웨어 마이스터고다. 광주광역시 광산구
        송정동에 위치한 SW 마이스터 고등학교로 대한민국에서 세 번째로 개교한
        소프트웨어 마이스터고다. 광주광역시 광산구 송정동에 위치한 SW 마이스터
        고등학교로 대한민국에서 세 번째로 개교한 소프트웨어 마이스터고다.
        광주광역시 광산구 송정동에 위치한 SW 마이스터 고등학교로 대한민국에서 세
        번째로 개교한 소프트웨어 마이스터고다.
      </S.Description>
      <S.Line />
      <S.TextMembersBox>
        <S.TextMembers>그룹원들</S.TextMembers>
        {isOwner && <I.OwnerButton />}
      </S.TextMembersBox>
      <div style={{ margin: '0px 0px 2px 12.43px' }}>
        <I.OwnerIcon />
      </div>
      <S.MemberList>
        <S.Memeber
          src='https://newsimg-hams.hankookilbo.com/2022/11/11/dba4d061-b5f9-486f-9bb8-cd09f5f75277.jpg'
          alt='그룹원 이미지'
        />
        <S.Memeber
          src='https://newsimg-hams.hankookilbo.com/2022/11/11/dba4d061-b5f9-486f-9bb8-cd09f5f75277.jpg'
          alt='그룹원 이미지'
        />
        <S.Memeber src='https://newsimg-hams.hankookilbo.com/2022/11/11/dba4d061-b5f9-486f-9bb8-cd09f5f75277.jpg' />
        <S.Memeber
          src='https://newsimg-hams.hankookilbo.com/2022/11/11/dba4d061-b5f9-486f-9bb8-cd09f5f75277.jpg'
          alt='그룹원 이미지'
        />
        <S.Memeber src='https://newsimg-hams.hankookilbo.com/2022/11/11/dba4d061-b5f9-486f-9bb8-cd09f5f75277.jpg' />
        <S.Memeber
          src='https://newsimg-hams.hankookilbo.com/2022/11/11/dba4d061-b5f9-486f-9bb8-cd09f5f75277.jpg'
          alt='그룹원 이미지'
        />
      </S.MemberList>
      {isOwner && <S.RemoveGroupButton>그룹삭제</S.RemoveGroupButton>}
    </S.GroupInformationPageLayout>
  );
}

export default GroupInformation;
