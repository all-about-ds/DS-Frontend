import { groupIsClickedAtom } from 'atoms/container';
import ModalLayout from 'components/common/layout/modal';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from '../../../assets/svg';

function MainModal() {
  const [, setGroupIsClicked] = useRecoilState(groupIsClickedAtom);

  return (
    <ModalLayout setModal={setGroupIsClicked}>
      <S.GroupIsClickedModal onClick={(e) => e.stopPropagation()}>
        <S.Image image=''>
          <S.LockBox>
            <I.Lock />
          </S.LockBox>
          <S.ExitBox onClick={() => setGroupIsClicked(false)}>
            <I.Exit />
          </S.ExitBox>
        </S.Image>
        <S.ContentWrapper>
          <S.memberNum>정원 20명</S.memberNum>
          <S.Title>광주소프트웨어마이스터고등학교</S.Title>
          <S.UserBox>
            <S.Profile image='' />
            <S.UserName>오종진</S.UserName>
          </S.UserBox>
          <S.Description>
            광주광역시 광산구 송정동에 위치한 SW 마이스터 고등학교로
            대한민국에서 세 번째로 개교한 소프트웨어 마이스터고다. 광주광역시
            광산구 송정동에 위치한 SW 마이스터 고등학교로 대한민국에서 세 번째로
            개교한 소프트웨어 마이스터고다.
          </S.Description>
          <S.JoinButton>가입</S.JoinButton>
        </S.ContentWrapper>
      </S.GroupIsClickedModal>
    </ModalLayout>
  );
}

export default MainModal;
