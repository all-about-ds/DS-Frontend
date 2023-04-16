import ModalLayout from 'components/common/layout/modal';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { modalAtomFamily } from 'atoms';

interface DefaultModal {
  atomKey: string;
  title: string;
  description: string;
  excuteButtonText: string;
  executeFunc: () => void;
}

function DefaultModal(props: DefaultModal) {
  const [_, setModal] = useRecoilState(modalAtomFamily(props.atomKey));

  const onCancle = () => {
    setModal(false);
  };

  return (
    <ModalLayout setModal={setModal}>
      <S.DefaultModal onClick={(e) => e.stopPropagation()}>
        <div>
          <S.Title>{props.title}</S.Title>
          <S.Description>{props.description}</S.Description>
        </div>
        <S.ButtonBox>
          <S.CancleButton onClick={onCancle}>취소</S.CancleButton>
          <S.ExecuteButton onClick={props.executeFunc}>
            {props.excuteButtonText}
          </S.ExecuteButton>
        </S.ButtonBox>
      </S.DefaultModal>
    </ModalLayout>
  );
}

export default DefaultModal;
