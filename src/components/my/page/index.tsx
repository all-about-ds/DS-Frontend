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
import { useRecoilState } from 'recoil';
import { modalAtomFamily } from 'atoms';
import { Link } from 'react-router-dom';
import EditProfileImageModal from 'components/modals/my/editProfileImage';

function My() {
  const [myInfo, setMyInfo] = useState<GetMyInfoInterface>();
  const [loaded, setLoaded] = useState<boolean>(false);

  const [editNameModal, setEditNameModal] = useRecoilState(
    modalAtomFamily('editName')
  );
  const [editProfileImageModal, setEditProfileImageModal] = useRecoilState(
    modalAtomFamily('editProfileImage')
  );

  const navigate = useNavigate();

  useEffect(() => {
    const getMyInfo = async () => {
      setLoaded(false);
      try {
        const res: any = await user.getMyInfo();
        setMyInfo(res.data);
        setLoaded(true);
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
      {editNameModal && <EditNameModal oldName={String(myInfo?.name)} />}
      {editProfileImageModal && <EditProfileImageModal />}
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
            {!myInfo?.img && <I.DefaultProfile />}
            {myInfo?.img && (
              <S.ProfileImage src={myInfo?.img} alt='프로필 이미지' />
            )}
            <div>
              <S.UpdateBox loaded={loaded}>
                <div onClick={() => setEditProfileImageModal(true)}>
                  <I.UpdateProfileImageIcon />
                </div>
                <div onClick={() => setEditNameModal(true)}>
                  <I.UpdateNameIcon />
                </div>
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
              <Link to={'/group/' + group.idx + '/information'} key={group.idx}>
                <MyGroupItem
                  idx={group.idx}
                  name={group.name}
                  img={group.img}
                />
              </Link>
            ))}
          </S.GroupList>
        </S.GroupSection>
      </S.MyPageLayout>
    </>
  );
}

export default My;
