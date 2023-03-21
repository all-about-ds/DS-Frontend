import Header from 'components/common/header';
import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import user from 'api/user';
import { GetMyInfoInterface } from 'types/user.type';
import MyGroupItem from '../item';
import tokenService from 'utils/tokenService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditNameModal from 'components/modals/my/editName';

function My() {
  const [myInfo, setMyInfo] = useState<GetMyInfoInterface>();
  const navigate = useNavigate();

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const res: any = await user.getMyInfo();
        setMyInfo(res.data);
      } catch (e: any) {
        console.log(e);
      }
    };

    getMyInfo();
  }, []);

  const onLogout = () => {
    tokenService.removeUser();
    toast.success('로그아웃 되었어요');
    navigate('/');
  };

  return (
    <>
      <Header />
      <EditNameModal />
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
              <S.LogoutButton onClick={onLogout}>로그아웃</S.LogoutButton>
            </div>
          </S.ProfileBox>
        </S.ProfileSection>
        <S.GroupSection>
          <S.GroupText>내 그룹</S.GroupText>
          <S.GroupList>
            {myInfo?.groups.map((group) => (
              <MyGroupItem
                key={group.idx}
                idx={group.idx}
                name={group.img}
                img={group.img}
              />
            ))}
          </S.GroupList>
        </S.GroupSection>
      </S.MyPageLayout>
    </>
  );
}

export default My;
