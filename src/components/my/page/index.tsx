import Header from 'components/common/header';
import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import user from 'api/user';
import { GetMyInfoInterface } from 'types/user.type';
import MyGroupItem from '../item';

function My() {
  const [myInfo, setMyInfo] = useState<GetMyInfoInterface>();

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const res: any = await user.getMyInfo();
        setMyInfo(res.data);
      } catch {
        console.log();
      }
    };

    getMyInfo();
  }, []);
  return (
    <>
      <Header />
      <S.MyPageLayout>
        <S.ProfileSection>
          <S.NameBox>
            <S.Name>{myInfo?.name}님의 프로필</S.Name>
            <I.NormalIcon />
          </S.NameBox>
          <S.Description>
            프로필 사진과 닉네임으로 자신을 표현해봐요.
          </S.Description>
          <S.ProfileBox>
            <S.ProfileImage src={myInfo?.img} alt='프로필 이미지' />
            <div>
              <S.UpdateBox>
                <I.UpdateProfileImageIcon />
                <I.UpdateNameIcon />
                <p>{myInfo?.name}</p>
              </S.UpdateBox>
              <S.LogoutButton>로그아웃</S.LogoutButton>
            </div>
          </S.ProfileBox>
        </S.ProfileSection>
        <S.GroupSection>
          <S.GroupText>내 그룹</S.GroupText>
          <S.GroupList>
            {myInfo?.myGroupList.map((group, index) => (
              <MyGroupItem key={index} name={group.img} img={group.img} />
            ))}
          </S.GroupList>
        </S.GroupSection>
      </S.MyPageLayout>
    </>
  );
}

export default My;
