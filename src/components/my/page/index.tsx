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
import DefaultModal from 'components/modals/default';
import { ref, remove } from 'firebase/database';
import { db } from '../../../firebase';
import { userInfoAtomFamily } from 'atoms/container';

function My() {
  const [myInfo, setMyInfo] = useState<GetMyInfoInterface>();
  const [userName] = useRecoilState(userInfoAtomFamily('name'));
  const [loaded, setLoaded] = useState<boolean>(false);
  const [logoutModal, setLogoutModal] = useRecoilState(
    modalAtomFamily('logout')
  );
  const [withdrawalModal, setWithdrawalModal] = useRecoilState(
    modalAtomFamily('withdrawal')
  );
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
      } catch {
        toast.error('잘못된 접근입니다');
        tokenService.removeUser();
        navigate('/');
      }
    };

    getMyInfo();
  }, []);

  const onLogout = () => {
    tokenService.removeUser();
    setLogoutModal(false);
    toast.success('로그아웃 되었어요');
    navigate('/');
  };

  const onWithdrawal = async () => {
    try {
      await user.withdrawal();
      removeUserOnFirebase();
      setWithdrawalModal(false);
      tokenService.removeUser();
      toast.success('회원탈퇴 되었어요');
      navigate('/');
    } catch {
      setWithdrawalModal(false);
      toast.error('알 수 없는 오류에요');
    }
  };

  const removeUserOnFirebase = () => {
    myInfo?.groups.map((item) => {
      remove(ref(db, `timers/${item.name}/users/${userName}`));
    });
  };

  return (
    <>
      <Header />
      {logoutModal && (
        <DefaultModal
          atomKey='logout'
          title='로그아웃하기'
          description='정말 로그아웃 하시겠어요?'
          excuteButtonText='로그아웃'
          executeFunc={onLogout}
        />
      )}
      {withdrawalModal && (
        <DefaultModal
          atomKey='withdrawal'
          title='탈퇴하기'
          description='정말 저희 DS를 탈퇴하시겠어요?'
          excuteButtonText='탈퇴'
          executeFunc={onWithdrawal}
        />
      )}
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
            {!myInfo?.profileImg && <I.DefaultProfile />}
            {myInfo?.profileImg && (
              <S.ProfileImage src={myInfo?.profileImg} alt='프로필 이미지' />
            )}
            <S.ColumnSortingBox>
              <S.UpdateBox loaded={loaded}>
                <div onClick={() => setEditProfileImageModal(true)}>
                  <I.UpdateProfileImageIcon />
                </div>
                <div onClick={() => setEditNameModal(true)}>
                  <I.UpdateNameIcon />
                </div>
                <p>{myInfo?.name}</p>
              </S.UpdateBox>
              <S.LogoutButton onClick={() => setLogoutModal(true)}>
                로그아웃
              </S.LogoutButton>
              <S.UserWithdrawalButton onClick={() => setWithdrawalModal(true)}>
                회원탈퇴
              </S.UserWithdrawalButton>
            </S.ColumnSortingBox>
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
          {!myInfo?.groups.length && (
            <S.MyGroupNotFound>
              <div>
                <S.NotFoundText>아직 가입된 그룹이 없어요. 🧐</S.NotFoundText>
                <S.MoveMainButton onClick={() => navigate('/')}>
                  그룹 가입하기
                </S.MoveMainButton>
              </div>
            </S.MyGroupNotFound>
          )}
        </S.GroupSection>
      </S.MyPageLayout>
    </>
  );
}

export default My;
