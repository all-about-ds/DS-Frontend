import { modalAtomFamily } from 'atoms';
import ModalLayout from 'components/common/layout/modal';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from './style';

type page = 'signup' | 'findPassword';

interface AuthEmailErrorModalProps {
  pageType: page;
}

function AuthEmailErrorModal(props: AuthEmailErrorModalProps) {
  const [_, setModal] = useRecoilState(modalAtomFamily(props.pageType));

  return (
    <ModalLayout setModal={setModal}>
      <S.AuthEmailErrorModal onClick={(e) => e.stopPropagation()}>
        <S.Text>
          {props.pageType === 'signup' && '이미 가입된 이메일이에요'}
          {props.pageType === 'findPassword' &&
            '해당 이메일은 가입되지 않았어요'}
        </S.Text>
        <S.EmojiBox>😯</S.EmojiBox>
        <S.BottomButtonBox>
          <Link
            to={props.pageType === 'signup' ? '/auth/signin' : '/auth/signup'}
          >
            <S.GoLoginBox>
              {props.pageType === 'signup' && '로그인 하러가기'}
              {props.pageType === 'findPassword' && '회원가입 하기'}
            </S.GoLoginBox>
          </Link>
          <S.RetryBox onClick={() => setModal(false)}>다시 입력</S.RetryBox>
        </S.BottomButtonBox>
      </S.AuthEmailErrorModal>
    </ModalLayout>
  );
}

export default AuthEmailErrorModal;
