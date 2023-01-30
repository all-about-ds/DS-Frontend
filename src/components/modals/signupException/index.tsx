import { signupEmailDuplicationModalAtom } from 'atoms';
import ModalLayout from 'components/common/layout/modal';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from './style';

function SignupEmailDuplicationModal() {
  const [_, setSignupEmailDuplicationModal] = useRecoilState(
    signupEmailDuplicationModalAtom
  );
  return (
    <ModalLayout setModal={setSignupEmailDuplicationModal}>
      <S.SignupEmailDuplicationModal onClick={(e) => e.stopPropagation()}>
        <S.Text>이미 가입된 이메일이에요</S.Text>
        <S.EmojiBox>😯</S.EmojiBox>
        <S.BottomButtonBox>
          <Link to={'/signin'}>
            <S.GoLoginBox>로그인 하러가기</S.GoLoginBox>
          </Link>
          <S.RetryBox onClick={() => setSignupEmailDuplicationModal(false)}>
            다시 입력
          </S.RetryBox>
        </S.BottomButtonBox>
      </S.SignupEmailDuplicationModal>
    </ModalLayout>
  );
}

export default SignupEmailDuplicationModal;
