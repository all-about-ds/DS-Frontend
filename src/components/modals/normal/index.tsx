import { modalAtomFamily } from 'atoms';
import ModalLayout from 'components/common/layout/modal';
import * as S from './style';
import { useRecoilState } from 'recoil';

interface NormalModalProps {
  atomKey: string;
  title: string;
  description: string;
  executionText: string;
  onExecute: () => void;
}

function NormalModal(props: NormalModalProps) {
  const [, setModal] = useRecoilState(modalAtomFamily(props.atomKey));

  return (
    <ModalLayout setModal={setModal}>
      <S.NormalModal onClick={(e) => e.stopPropagation()}>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
        <S.ButtonBox>
          <S.CancleButton onClick={() => setModal(false)}>취소</S.CancleButton>
          <S.ExecuteButton onClick={props.onExecute}>
            {props.executionText}
          </S.ExecuteButton>
        </S.ButtonBox>
      </S.NormalModal>
    </ModalLayout>
  );
}

export default NormalModal;
