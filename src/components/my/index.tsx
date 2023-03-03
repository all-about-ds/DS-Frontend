import Header from 'components/common/header';
import * as S from './style';
import * as I from 'assets/svg';

function My() {
  return (
    <>
      <Header />
      <S.MyPageLayout>
        <S.ProfileSection>
          <S.NameBox>
            <S.Name>오종진님의 프로필</S.Name>
            <I.NormalIcon />
          </S.NameBox>
          <S.Description>
            프로필 사진과 닉네임으로 자신을 표현해봐요.
          </S.Description>
          <S.ProfileBox>
            <S.ProfileImage src='https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201610/20/htm_2016102016349443859.jpg' />
            <div>
              <S.UpdateBox>
                <I.UpdateProfileImageIcon />
                <I.UpdateNameIcon />
                <p>오종진</p>
              </S.UpdateBox>
              <S.LogoutButton>로그아웃</S.LogoutButton>
            </div>
          </S.ProfileBox>
        </S.ProfileSection>
        <S.GroupSection>
          <S.GroupText>내 그룹</S.GroupText>
          <S.GroupList>
            <S.GroupItem>
              <S.ItemBackgroundImage src='https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201610/20/htm_2016102016349443859.jpg' />
              <S.Shadow>
                <S.ItemName>GSM 공부방</S.ItemName>
              </S.Shadow>
            </S.GroupItem>
          </S.GroupList>
        </S.GroupSection>
      </S.MyPageLayout>
    </>
  );
}

export default My;
